"use client"
import { useEffect } from "react";
import { useAppContext } from "@/context";
import Image from "next/image";
import {auth} from "../firebase/config"
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";



const Shoppingcart = () => {
  const { cart, RemoveFromCart, AddToCart, setCart } = useAppContext();
    const [user] = useAuthState(auth);
  

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      if (parsedCart) {
        setCart(parsedCart); 
      }
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

const route = useRouter()
  const handlecheckout = ()=>{
    if(user && cart.length > 0){
      setTimeout(() => {
        route.push("../checkout")
      }, 1000);
    }else if(user && !cart.length){
      setTimeout(() => {
      route.push("../allproducts")
    }, 1000);
    } else{
      setTimeout(() => {
      route.push("../sign-up")
    }, 2000);
    }
  }

  return (
    <>
      <div className="sm:pt-[64px] sm:px-[10.8%] px-[23px] pt-[36px]">
        <h1 className="font-clash font-normal sm:text-[36px] sm:leading-[50.4px] text-[24px] leading-[33.6px] text-[#2A254B]">
          Your shopping cart
        </h1>
        <div className="sm:flex font-clash font-normal justify-between text-[14px] leading-[19.6px] sm:mt-[48px] mt-[40px] hidden">
          <p className="sm:mr-[29.5%]">Product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="border bg-[#EBE8F4] sm:mt-[12px] mt-[40px] sm:mb-[20px] sm:block hidden"></div>
        <div className="flex flex-col sm:gap-[20px] mt-[40px] sm:mb-[0px]">
          {cart.map((elem) => (
            <div key={elem._id}>
              <div
                id="product card"
                className="w-auto sm:flex sm:flex-row justify-between flex-col"
              >
                <div
                  id="product one"
                  className="w-auto h-auto flex sm:gap-[21px] gap-[22px]"
                >
                  <Image
                    src={elem.imageUrl}
                    alt="product image"
                    height={300}
                    width={300}
                    className="w-[109px] h-[134px] object-cover bg-center rounded-md"
                  />
                  <div id="description" className="flex flex-col gap-[8px]">
                    <h4 className="font-clash font-normal sm:text-[20px] sm:leading-[28px] text-[16px] leading-[22.4px]">
                      {elem.title}
                    </h4>
                    <p className="font-satoshi font-normal sm:text-[14px] text-wrap sm:leading-[21px] text-[14px] leading-[21px] ">
                      {elem.description.length > 50
                        ? `${elem.description.substring(0, 50)}...`
                        : elem.description}
                    </p>
                    {/* Total for each item */}
                    <p className="font-satoshi font-normal text-[14px] leading-[21px]">
                      £{elem.price}
                    </p>
                  </div>
                </div>

                <div className="w-[122px] justify-between px-[16px] py-[12px] font-satoshi font-normal text-[16px]   justify-self-end leading-[21.6px] flex ">
                  
                  <button
                    onClick={() => RemoveFromCart(elem._id)}
                    className="text-[#535353] max-h-max px-2 "
                  >
                    -
                  </button>
                  <p>{elem.quantity}</p>
                  <button
                    onClick={() => AddToCart(elem)}
                    className="text-[#535353] max-h-max px-2"
                  >
                    +
                  </button>
                </div>
                <p className="font-satoshi font-normal text-[18px] leading-[27px] sm:block hidden">
                  £{(elem.price * elem.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border bg-[#EBE8F4] sm:mt-[12px] sm:mb-[20px]"></div>
        <div
          id="pricing info"
          className="flex flex-col items-end sm:gap-[12px] gap-[7px] mt-[16px] sm:mt-0 sm:mb-[16px]"
        >
          <div
            id="subtotal"
            className="flex gap-[16px] justify-center items-center"
          >
            <h4 className="font-clash font-normal text-[20px] leading-[28px]">
              Subtotal
            </h4>
            {/* Subtotal */}
            <h3 className="font-clash font-normal text-[24px] leading-[33.6px]">
              £{subtotal.toFixed(2)}
            </h3>
          </div>
          <p className="font-satoshi font-normal text-[14px] leading-[21px]">
            Taxes and shipping are calculated at checkout
          </p>
        </div>
        <div className="flex justify-end sm:mb-[48px] mb-[55px] mt-[36px]">
          <button onClick={handlecheckout} className="bg-[#2A254B] hover:bg-slate-800 rounded-lg px-[32px] py-[16px] sm:w-auto w-[342px] flex justify-center">
            <p className="text-white font-satoshi font-normal text-[16px] leading-[24px]">
              Go to checkout
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Shoppingcart;
