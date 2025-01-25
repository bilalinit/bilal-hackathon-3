"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
interface Item {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl?: string; // Optional if it can be null or undefined
}

interface UserDetails {
  shippingInfo: {
    fname: string;
    lname: string;
    address1: string;
    city: string;
    postal: string;
  };
  userOrder: Item[]; // Reuse the `Item` interface already defined
  paymentMethod: string;
}

export default function OrderConfirmation() {
  const [userdetails, setuserdetails] = useState<UserDetails | null>(null);
  const router = useRouter(); 

  const fetchuserdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docref = doc(db, "users", user.uid || "");
          const docsnap = await getDoc(docref);
          if (docsnap.exists()) {
            setuserdetails(docsnap.data() as UserDetails);
          } else {
            console.log("No user data found.");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      }
    });
  };


  
  useEffect(() => {
    fetchuserdata();
  }, []);

  if (!userdetails) {
    return <div className=" h-screen w-full flex items-center justify-center">Loading...</div>; 
  }

  const { shippingInfo, userOrder, paymentMethod } = userdetails;

  
  const totalPrice = userOrder?.reduce(
    (sum: number, item: Item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="min-h-screen font-clash bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order Confirmed
              </h3>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Thank you for your purchase, {shippingInfo?.fname} {shippingInfo?.lname}!
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {paymentMethod || "N/A"}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Shipping Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {`${shippingInfo?.address1}, ${shippingInfo?.city}, ${shippingInfo?.postal}`}
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h4 className="text-lg leading-6 font-medium text-gray-900 mb-4">Order Items</h4>
            <ul className="divide-y divide-gray-200">
              {userOrder?.map((item : Item ) => (
                <li key={item._id} className="py-4 flex items-center">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h4 className="text-lg leading-6 font-medium text-gray-900">
             Total Price:   $     {totalPrice?.toFixed(2) || "0.00"}
            </h4>
          </div>
          
          <div className="px-4 py-4 sm:px-6">
            <button
              onClick={() => router.push("/")} 
              className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}