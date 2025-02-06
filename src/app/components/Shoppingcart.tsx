"use client";

import { useEffect } from "react";
import { useAppContext } from "@/context";
import Image from "next/image";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Shoppingcart = () => {
  const { cart, RemoveFromCart, AddToCart, setCart } = useAppContext();
  const [user] = useAuthState(auth);
  const router = useRouter();

  // Subtotal calculate karna
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // On Component Mount, fetch cart data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      if (parsedCart) {
        setCart(parsedCart); // Assuming setCart is available via context
      }
    }
  }, []);

  // When cart updates, sync with localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const handlecheckout = () => {
    if (user && cart.length > 0) {
      setTimeout(() => {
        router.push("../checkout");
      }, 1000);
    } else if (user && !cart.length) {
      setTimeout(() => {
        router.push("../productlisting");
      }, 1000);
    } else {
      setTimeout(() => {
        router.push("../sign-up");
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-50 py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Your Shopping Cart
        </h1>

        {/* Cart Items or Empty Message */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-md">
          

            <h2 className="text-xl font-medium text-gray-700 mt-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
  Looks like you haven&apos;t added anything to your cart yet.
</p>

            <button
              onClick={() => router.push("../productlisting")}
              className="mt-6 px-6 py-3 bg-[#252B42] hover:bg-[#3b4468] text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Table Headers */}
            <div className="hidden sm:block">
              <div className="py-3 px-5 bg-gray-100">
                <div className="flex items-center">
                  <div className="w-1/2 text-left">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Product
                    </p>
                  </div>
                  <div className="w-1/4 text-center">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Quantity
                    </p>
                  </div>
                  <div className="w-1/4 text-right">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item._id} className="py-4 px-5">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="w-full sm:w-1/2 flex items-center mb-4 sm:mb-0">
                      <div className="mr-4">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description.length > 50
                            ? `${item.description.substring(0, 50)}...`
                            : item.description}
                        </p>
                        <p className="text-gray-700 text-sm">£{item.price}</p>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/4 flex items-center justify-center mb-4 sm:mb-0">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => RemoveFromCart(item._id)}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                          -
                        </button>
                        <span className="px-4 text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => AddToCart(item)}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/4 text-right">
                      <p className="text-lg font-semibold text-gray-800">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Pricing Info */}
            <div className="py-4 px-5 flex flex-col items-end">
              <div className="flex items-center mb-3">
                <h4 className="text-lg font-medium text-gray-700 mr-4">
                  Subtotal:
                </h4>
                <h3 className="text-2xl font-semibold text-gray-800">
                  £{subtotal.toFixed(2)}
                </h3>
              </div>
              <p className="text-gray-500 text-sm">
                Taxes and shipping are calculated at checkout
              </p>
            </div>

            {/* Checkout Button */}
            <div className="py-5 px-5 flex justify-end">
              <button
                onClick={handlecheckout}
                className="bg-[#252B42] hover:bg-[#3b4468] text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shoppingcart;
