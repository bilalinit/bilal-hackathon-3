"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppContext } from "@/context";

interface Item {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl?: string;
}

interface OrderDetails {
  shippingInfo: {
    fname: string;
    lname: string;
    address1: string;
    city: string;
    postal: string;
  };
  cart: Item[];
  paymentMethod: string;
  shippingCost: number;
}

export default function OrderConfirmation() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const router = useRouter();
  const { setCart } = useAppContext();

  const fetchLatestOrder = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const ordersRef = collection(db, "users", user.uid, "orders");
          const q = query(ordersRef, orderBy("timestamp", "desc"), limit(1)); // Fetch latest order
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const latestOrder = querySnapshot.docs[0].data() as OrderDetails;
            setOrderDetails(latestOrder);
          } else {
            console.log("No recent orders found.");
          }
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      }
    });
  };

  useEffect(() => {
    fetchLatestOrder();
    // Clear cart
    setCart([]);
    localStorage.removeItem("cart");
  }, []);

  if (!orderDetails) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900 text-white font-montserrat">
        Loading...
      </div>
    );
  }

  const { shippingInfo, cart, paymentMethod, shippingCost } = orderDetails;

  // Calculate total price
  const totalPrice = cart?.reduce(
    (sum: number, item: Item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 shadow-lg rounded-3xl overflow-hidden">
          <div className="px-6 py-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Order Confirmed</h3>
            </div>
            <p className="text-gray-400">
              Thank you for your purchase, {shippingInfo?.fname} {shippingInfo?.lname}!
            </p>
          </div>

          <div className="border-t border-gray-700">
            <dl>
              <div className="bg-gray-700 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-300">Payment Method</dt>
                <dd className="text-sm text-gray-200 sm:col-span-2">{paymentMethod || "N/A"}</dd>
              </div>
              <div className="bg-gray-800 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-300">Shipping Address</dt>
                <dd className="text-sm text-gray-200 sm:col-span-2">
                  {`${shippingInfo?.address1}, ${shippingInfo?.city}, ${shippingInfo?.postal}`}
                </dd>
              </div>
            </dl>
          </div>

          <div className="px-6 py-6">
            <h4 className="text-xl font-semibold text-white mb-4">Order Items</h4>
            <ul className="divide-y divide-gray-700">
              {cart?.map((item: Item) => (
                <li key={item._id} className="py-4 flex items-center">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-200 truncate">{item.name}</p>
                    <p className="text-gray-400">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-lg font-semibold text-gray-200">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Total Price Section */}
          <div className="px-6 py-6 bg-gray-700">
            <h4 className="text-xl font-semibold text-white">
              Total Price: ${(shippingCost + totalPrice).toFixed(2) || "0.00"}
            </h4>
          </div>

          {/* Home Button */}
          <div className="px-6 py-6 flex justify-between items-center">
            <button
              onClick={() => router.push("/")} // Redirect to home page
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Go to Home
            </button>
            <Link href="../orderhistory">
              <button className="px-6 py-3 text-gray-200 border border-gray-500 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200">
                Order History
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
