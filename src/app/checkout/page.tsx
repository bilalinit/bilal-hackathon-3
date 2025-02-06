"use client";
import { useState, useRef, useEffect } from "react";
import { DollarSign, Package } from "lucide-react";
import { useAppContext } from "@/context";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image"; // Import Next.js Image
import stripeimage from "../assets/Stripelogo.png"; // Import your image

interface MousePosition {
  x: number;
  y: number;
}

export default function Checkout() {
  const { cart } = useAppContext();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address1, setaddress1] = useState("");
  const [city, setcity] = useState("");
  const [state, setState] = useState("CA");
  const [postal, setpostal] = useState("");
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [loadingShipping, setLoadingShipping] = useState(false);
  const [user] = useAuthState(auth);
  const paymentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (paymentRef.current) {
        const rect = paymentRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const currentPaymentRef = paymentRef.current; // Store current value

    if (currentPaymentRef) {
      currentPaymentRef.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (currentPaymentRef) {
        currentPaymentRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79,70,229,0.30), rgba(31,41,55,1))`,
  };

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to calculate shipping rates
  const calculateShipping = async () => {
    if (!address1 || !city || !postal) {
      alert("Please fill in all shipping details.");
      return;
    }

    // Validate address and postal code
    if (!/^\d+[\s\w]+$/.test(address1)) {
      alert("Please enter a valid street address.");
      return;
    }

    if (!/^\d{5}$/.test(postal)) {
      alert("Please enter a valid 5-digit ZIP code.");
      return;
    }

    setLoadingShipping(true);

    try {
      const response = await fetch("/api/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromAddress: {
            name: "Your Company Name",
            phone: "123-456-7890",
            addressLine1: "123 Main St",
            cityLocality: "New York",
            stateProvince: "NY",
            postalCode: "10001",
            countryCode: "US",
          },
          toAddress: {
            name: `${fname} ${lname}`,
            phone: "123-456-7890",
            addressLine1: address1.replace(/[^a-zA-Z0-9\s]/g, ""), // Clean special characters
            cityLocality: city,
            stateProvince: state,
            postalCode: postal,
            countryCode: "US",
          },
          parcel: {
            weight: 5, // Adjust based on your product
            length: 10,
            width: 8,
            height: 6,
          },
        }),
      });

      const responseBody = await response.text(); // Read response once
      //console.log("Shipping API Response Status:", response.status);
      //console.log("Shipping API Response Body:", responseBody);

      if (!response.ok) throw new Error("Failed to calculate shipping rates");

      const data = JSON.parse(responseBody);

      // Check if rates are available
      if (!data.rateResponse?.rates || data.rateResponse.rates.length === 0) {
        throw new Error("No shipping options available for this address.");
      }

      // Log the first rate object for debugging
      //console.log("First Rate Object:", data.rateResponse.rates[0]);

      // Access the shipping cost
      const rate = data.rateResponse.rates[0]?.shippingAmount?.amount;
      const rounded = Math.round(rate);
      if (rate) {
        setShippingCost(rounded);
      } else {
        alert("No shipping rates available.");
      }
    } catch (error) {
      console.error("Error calculating shipping:", error);
      alert(error || "Failed to calculate shipping rates. Please try again.");
    } finally {
      setLoadingShipping(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (shippingCost === null) {
      alert("Please calculate shipping rates before proceeding.");
      return;
    }

    try {
      // Save order to Firebase
      if (user) {
        const ordersRef = collection(db, "users", user.uid, "orders");
        await addDoc(ordersRef, {
          cart,
          shippingInfo: { fname, lname, address1, city, postal },
          paymentMethod: "stripe",
          timestamp: new Date(),
          status: "pending",
          shippingCost,
        });
      }

      // Process Stripe payment
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, shippingCost }),
      });

      if (!response.ok) throw new Error("Payment failed");

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-xl mx-auto bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Complete Your Order
          </h1>
          <p className=" text-[12px] text-violet-500 text-center select-none pointer-events-none">(please enter valid info according to their respective states)</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Address Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-300 mb-4">
                Shipping Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={fname}
                    onChange={(e) => setfname(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-400"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address1}
                  onChange={(e) => setaddress1(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                />
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-400"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-400"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                  >
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    {/* Add more states as needed */}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-400"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  value={postal}
                  onChange={(e) => setpostal(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4"
                />
              </div>
            </div>

            {/* Calculate Shipping Button */}
            <button
              type="button"
              onClick={calculateShipping}
              disabled={loadingShipping}
              className="w-full flex justify-center py-3 px-4 rounded-full font-semibold text-white bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
            >
              {loadingShipping ? (
                <span>Calculating...</span>
              ) : (
                <>
                  <Package className="w-5 h-5 mr-2" />
                  Calculate Shipping
                </>
              )}
            </button>

            {/* Display Shipping Cost */}
            {shippingCost !== null && (
              <div className="flex justify-between items-center py-3 border-t border-gray-700">
                <span className="text-sm font-medium text-gray-400">
                  Shipping
                </span>
                <span className="font-semibold text-gray-300">
                  ${shippingCost.toFixed(2)}
                </span>
              </div>
            )}

            {/* Order Summary */}
            <div className="py-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-400">
                  Subtotal
                </span>
                <span className="font-semibold text-gray-300">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              {shippingCost !== null && (
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium text-gray-400">
                    Total
                  </span>
                  <span className="font-semibold text-gray-300 text-lg">
                    ${(subtotal + shippingCost).toFixed(2)}
                  </span>
                </div>
              )}
            </div>
            {/* Secure Payment Section */}
            <div
              ref={paymentRef}
              className="p-8 rounded-3xl mb-8 shadow-lg transition-all duration-200"
              style={gradientStyle}
            >
              <h3 className="text-xl font-semibold text-gray-200 flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Secure Payment
              </h3>
              <p className="text-gray-400 text-sm mb-4 ">
                Your payment is processed securely via Stripe. We ensure your
                data is protected.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0L8.5 8.586a1 1 0 001.414 0l2.293-2.293a1 1 0 011.414 0l1.293 1.293a1 1 0 001.414 0l1.293-1.293V15a1 1 0 01-1 1H4a1 1 0 01-1-1V5.293l1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm select-none pointer-events-none">
                    Protected by Stripe
                  </span>
                </div>
                <Image
                  src={stripeimage}
                  alt="Powered by Stripe"
                  className="h-6 w-16 select-none pointer-events-none"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              style={gradientStyle}
              
              className="w-full flex justify-center py-3 px-4 rounded-full font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  transform transition-transform duration-700 hover:scale-105 hover:translate-2 "
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
