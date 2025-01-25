import Image from "next/image"

import herosml from "../assets/hero-cover-3sml.png"


const Universe = () => {
  return (
    <div className=" sm:h-[682px] pt-[120px] sm:pt-0 px-[9.83px] sm:px-0 ">
        <div id="row" className=" flex gap-[30px] sm:pl-[6.88vw] items-center sm:flex-row flex-col">
          <div className="bg-[url('/hero-cover-3.png')] w-[100%] h-[682px] bg-cover bg-center sm:block hidden "></div>
            <div id="text content" className=" flex flex-col gap-[30px] sm:pr-[198px]">
                <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center sm:text-start text-[#BDBDBD] sm:mx-0 mx-[136.17px]">SUMMER 2020</h5>
                <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] sm:mx-0 mx-[45.43px] sm:text-start text-center">Part of the Neural Universe</h2>
                <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] sm:mx-0 mx-[66.03px] sm:text-start text-center">We know how large objects will act, but things on a small scale.</h4>
                <div className="flex sm:flex-row flex-col gap-[25px] sm:gap-[10px] sm:mx-0 mx-[114.67px]">
                    <button className="font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] py-[15px] px-[40px] rounded-[5px] bg-[#23A6F0] sm:bg-[#2DC071] text-white">BUY NOW</button>
                    <button className="font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] py-[15px] px-[40px] rounded-[5px] border border-[#23A6F0] text-[#23A6F0] sm:border-[#2DC071] sm:text-[#2DC071] text-nowrap">READ MORE</button>
                </div>
            </div>
            <Image src={herosml} alt="" className="sm:hidden"/>
        </div>
    </div>
  )
}

export default Universe