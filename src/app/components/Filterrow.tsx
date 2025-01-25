import Image from "next/image"

import wintype from "../assets/wintype.png"
import navtype from "../assets/navbar icon.png"
import down2 from "../assets/down2.png"


const Filterrow = () => {
  return (
    <div className=" bg-[#FFFFFF] sm:px-[10.16vw] px-[4.17vw] py-[24px] ">
        <div className=" sm:flex sm:flex-row flex flex-col  items-center justify-between sm:gap-0 gap-6   ">
            <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Showing all 12 results</h6>
            <div className="flex gap-[15px] items-center">
                <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Views:</h6>
                <Image src={wintype} alt="" className=" " />
                <Image src={navtype} alt="" className=" " />
            </div>
            <div className=" flex items-center gap-4">
                <button className="flex items-center gap-[6px]  bg-[#DDDDDD] rounded border py-[11px] pl-[18px] pr-[21px] text-[#737373] font-montserrat font-normal text-[14px] leading-[28px] tracking-[0.2px]">Popularity <Image src={down2} alt="" className="w-[10px] h-[8px] " /></button>
                <button className="bg-[#23A6F0] px-[27px] pt-[10px] pb-[16px] rounded  font-montserrat font-bold text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px] ">Filter</button>
            </div>
        </div>
    </div>
  )
}

export default Filterrow