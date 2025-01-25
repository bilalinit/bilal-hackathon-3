import Image from "next/image"
import dude from "../assets/shop-hero-2-png-picture-1.png"

const Carousel2 = () => {
  return (
    <div id="carousel item" className="sm:h-[709px] h-[1230px] bg-[#23856D] sm:px-[10.42vw] sm:pt-0 pt-[48px] text-white overflow-hidden ">
    <div id="container" className=" py-[112px]  ">
        <div id="row" className="w-auto h-auto flex sm:flex-row flex-col gap-[30px] sm:pt-0 pt-[48px] ">
            <div id="text content" className="pt-[60px] flex flex-col gap-[35px] sm:gap-[30px] items-center sm:items-start text-center">
                <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] sm:text-start text-center">SUMMER 2020</h4>
                <h1 className="font-montserrat font-bold text-[40px] leading-[50px] sm:text-[58px] sm:leading-[80px] tracking-[0.2px] sm:text-start text-center">Vita Classic Product</h1>
                <h4 className="font-montserrat font-normal sm:text-[14px] sm:leading-[20px] text-[20px] leading-[30px] tracking-[0.2px] sm:text-start text-center sm:w-auto w-[291px] sm:mr-[168px] mr-0   ">We know how large objects will act, We know how are objects will act, We know</h4>
                <div id="cta " className="flex  flex-col sm:flex-row items-center gap-[34px]">
                    <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">$16.48</h3>
                    <button className="font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px] py-[15px] px-[40px] bg-[#2DC071]">ADD TO CART</button>
                </div>
            </div>
           <Image src={dude} alt="" className="px-[33.5] " />
        </div>
    </div>
</div>
  )
}

export default Carousel2