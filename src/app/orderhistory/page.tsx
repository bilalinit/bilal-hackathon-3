"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { Timestamp } from "firebase/firestore";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface Order {
  id: string;
  timestamp: Timestamp;
  status: string;
  paymentMethod: string;
  shippingInfo: {
    address1: string;
    city: string;
    fname: string;
    lname: string;
    postal: string;
  };
  cart?: CartItem[];
  shippingCost: number;
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) {
        return;
      }
      try {
        const ordersRef = collection(db, "users", user.uid, "orders");
        const snapshot = await getDocs(ordersRef);
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Order[];

        ordersData.sort((a, b) => {
          const timeA = a.timestamp.seconds * 1000;
          const timeB = b.timestamp.seconds * 1000;
          return timeB - timeA;
        });

        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);

  const gradientStyle = {
    background: "linear-gradient(to right, #4f46e5, #7c3aed)",
    color: "white",
    padding: "0.25rem 0.75rem",
    borderRadius: "0.375rem",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-indigo-300 hover:text-indigo-100 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-gray-800 rounded-3xl shadow-2xl p-8">
          <h1 className="text-3xl font-semibold text-center text-white mb-6">
            Your Order History
          </h1>

          {loading ? (
            <p className="text-gray-400 text-center">Loading orders...</p>
          ) : orders.length === 0 ? (
            <p className="text-gray-400 text-center">No orders found.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const shippingprice = order.shippingCost || 0;
                const totalPrice = (order.cart || []).reduce(
                  (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
                  0
                );
                return (
                  <div
                    key={order.id}
                    className="border rounded-2xl p-4 border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-300">
                        <p className="text-sm">
                          Order ID: <span className="font-semibold">{order.id}</span>
                        </p>
                        <p className="text-sm">
                          Date:{" "}
                          {new Date(order.timestamp.seconds * 1000).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-sm font-medium"
                          style={{ ...gradientStyle, display: "inline-block" }}
                        >
                          Status: {order.status}
                        </p>
                        <p className="text-sm">Payment: {order.paymentMethod}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-md font-semibold text-gray-200">
                        Shipping Address:
                      </h3>
                      <p className="text-gray-300">
                        {order.shippingInfo.fname} {order.shippingInfo.lname}
                      </p>
                      <p className="text-gray-300">
                        {order.shippingInfo.address1}, {order.shippingInfo.city},{" "}
                        {order.shippingInfo.postal}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-md font-semibold text-gray-200">Order Items:</h3>
                      <ul className="mt-2">
                        {(order.cart || []).map((item, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                          >
                            <div className="flex items-center">
                              {item.imageUrl && (
                                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                                  <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              <span className="text-gray-300">{item.name} (x{item.quantity})</span>
                            </div>
                            <span className="text-gray-200 font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-right mt-4">
                      <p className="text-lg font-semibold text-gray-100">
                        Total: ${(shippingprice + totalPrice).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
