"use client"
import React, { useState } from "react";
import Image from "next/image"
import cal from "../assets/icn settings icn-xs.png"
import vec from "../assets/Vector.png"
import insta2 from "../assets/insta2.png"
import you2 from "../assets/you2.png"
import face2 from "../assets/face2.png"
import x2 from "../assets/x2.png"
import down from "../assets/down.png"
import ss from "../assets/ss.png"
import ser from "../assets/ser.png"
import cart2 from "../assets/cartblue.png"
import heart from "../assets/heart.png"
import nav from "../assets/navbar icon.png"
import ss2 from "../assets/ss2.png"
import ser2 from "../assets/ser2.png"
import cartp2 from "../assets/cartp2.png"
import heart2 from "../assets/heart2.png"

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
    <div className="pl-[10.26vw] pr-[11.57vw] lg:block hidden pt-[9px] pb-[3px] bg-[#23856D]">
      <div className="sm:flex hidden gap-[30px]">
        <div
          id="phone-num"
          className="flex gap-[5px] p-[10px] items-center justify-center">

          <Image src={cal} alt="" className="w-[16px] h-[16px]" />
          <div className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px] text-white">
            (225) 555-0118
          </div>
        </div>

        <div
          id="email"
          className="flex gap-[5px] p-[10px] items-center justify-center"
        >
          <Image src={vec} alt="" className="w-[16px] h-[12px]" />
          <div className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px] text-white">
            michelle.rivera@example.com
          </div>
        </div>

        <div id="follow" className="flex gap-[5px] p-[10px]">
          <h6 className="font-montserrat font-bold text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px]">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        <div id="logo" className="flex gap-[5px] p-[10px]">
          <h6 className="font-montserrat font-bold text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px]">
            Follow Us :
          </h6>
          <Image src={insta2} alt="" className="w-[26px] h-[26px]" />
          <Image src={you2} alt="" className="w-[26px] h-[26px]" />
          <Image src={face2} alt="" className="w-[26px] h-[26px]" />
          <Image src={x2} alt="" className="w-[26px] h-[26px]" />
        </div>
      </div>
    </div>

    <div className="sm:block hidden px-[15.36vw] py-[10px]">
      <div className="flex gap-[6.2vw] items-center">
        <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
          Bandage
        </h3>
        <div id="right-side" className="flex gap-[6.51vw]">
          <div className="flex justify-center items-center gap-[15px]">
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Home
            </p>
            <div className="flex items-center gap-[9px]">
              <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                Shop
              </p>
              <Image src={down} alt="" className="w-[10px] h-[6px]" />
            </div>
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              About
            </p>
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Blog
            </p>
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Contact
            </p>
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Pages
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-[5px] p-[15px]">
              <Image src={ss} alt="" className="w-[12px] h-[12px]" />
              <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">
                Login/Register
              </p>
            </div>
            <Image src={ser} alt="" />
            <Image src={cart2} alt="" />
            <p className="font-montserrat font-normal text-[12px] align-super leading-[18px] tracking-[0.2px] text-[#23A6F0]">1</p>
            <Image src={heart} alt="" />
          </div>
        </div>
      </div>
    </div>

    <div id="phone-size" className="pl-[2.1875rem] pr-[38px] block sm:hidden">
      <div className="flex justify-between items-center pt-[23px]">
        <h3 className="font-montserrat font-bold text-[1.5rem] leading-[2rem] tracking-[0.00625rem]">
          Bandage
        </h3>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image src={nav} alt="Menu" />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center pt-[68px]">
          <div className="flex flex-col justify-center items-center gap-[30px] text-center">
            <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#252B42]">
              Home
            </p>
            <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]">
              Shop
            </p>
            <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]">
              About
            </p>
            <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]">
              Blog
            </p>
            <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]">
              Contact
            </p>
            <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]">
              Pages
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-[5px] px-[15px] py-[23.5px]">
              <Image src={ss2} alt="" />
              <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#23A6F0]">
                Login / Register
              </p>
            </div>
            <Image src={ser2} alt="" />
            <Image src={cartp2} alt="" />
            <Image src={heart2} alt="" />
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default Navbar2