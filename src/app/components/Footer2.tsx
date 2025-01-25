import Image from "next/image"
import img from "../assets/social media.png"

const Footer2 = () => {
  return (
    <div className="  ">
    <div id="upper-div" className=" sm:flex flex flex-col sm:px-[10.16vw] px-[5.44vw] bg-white ">
        <div className=" sm:flex sm:flex-row flex flex-col sm:gap-[60vw] gap-[24px] my-[53px]">
            <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">Bandage</h3>
            <Image src={img} alt="" className="h-[24px]"/>
        </div>
    </div>

    <div id="div-2" className=" flex sm:pl-[10.16vw] pl-[5.39vw] pr-[10.63vw] ">
        <div className=" py-[50px]">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-[30px]">
                <div id="first-container" className=" w-[148px] flex flex-col gap-[20px] text-nowrap">
                    <h5 id="heading" className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex flex-col gap-[20px] text-[#252B42]">Company Info</h5>
                    <div id="contant-container" className=" flex flex-col gap-[10px]">
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About Us</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Carrier</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">We are hiring</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</p>
                    </div>
                </div>

                <div id="second-container" className=" w-[152px] flex flex-col gap-[20px] text-nowrap">
                    <h5 id="heading" className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex flex-col gap-[20px] text-[#252B42]">Legal</h5>
                    <div id="contant-container" className=" flex flex-col gap-[10px]">
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About Us</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Carrier</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">We are hiring</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</p>
                    </div>
                </div>

                <div id="third-container" className=" w-[148px] flex flex-col gap-[20px] text-nowrap">
                    <h5 id="heading" className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex flex-col gap-[20px] text-[#252B42]">Features</h5>
                    <div id="contant-container" className=" flex flex-col gap-[10px]">
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Business Marketing</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">User Analytic</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Live Chat</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Unlimited Support</p>
                    </div>
                </div>

                <div id="first-container" className=" w-[152px] flex flex-col gap-[20px] text-nowrap">
                    <h5 id="heading" className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex flex-col gap-[20px] text-[#252B42]">Resources</h5>
                    <div id="contant-container" className=" flex flex-col gap-[10px]">
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">IOS & Android</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Watch a Demo</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Customers</p>
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">API</p>
                    </div>
                </div>

                <div className="flex flex-col  text-[#737373] font-montserrat font-normal text-[14px] leading-[28px] tracking-[0.2px] ">
                    <div className="flex flex-col gap-[20px]">
                     <h5 id="heading" className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex flex-col gap-[20px] text-[#252B42]">Get In Touch</h5>
                        <div className="flex ">
                            <input type="text" placeholder="Your Email" className="bg-[#E6E6E6] py-[15px]  pl-[20px] rounded-tl-[5px] rounded-bl-[5px] " />
                            <button className="bg-[#23A6F0] px-[22.5px] py-[15px] rounded-tr-[5px] rounded-br-[5px] ">
                                <p className="font-montserrat font-normal text-[14px] leading-[28px] tracking-[0.2px] text-[#FFFFFF]">Subscribe</p>
                            </button>
                            
                        </div>
                        
                        </div>
                        <p className="font-montserrat font-normal text-[12px] leading-[28px] tracking-[0.2px]">Lore imp sum dolor Amit</p>
                </div>

            </div>
        </div>
    </div>

    <div id="last-div" className=" flex sm:px-[195px] sm:py-[25px] px-[110px] text-[#737373]  text-center  bg-[#FAFAFA]">
        <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Made With Love By Finland All Right Reserved </h6>
    </div>
</div>
  )
}

export default Footer2