import Image from "next/image"
import rightaero from "../assets/right aero black.png"

const Productdescription = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[17px] ">
    <div id="top" className=" h-[91px] flex items-center sm:p-0 px-[21px] py-[9.5]  justify-center ">
        <div id="nav" className=" flex items-center justify-center">
            <div className="sm:p-[24px] py-[24px] px-[12px] flex justify-center items-center" ><p className=" text-[#737373] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer">Description</p></div>
            <div className="sm:p-[24px] py-[24px] px-[12px] flex justify-center items-center" ><p className=" text-nowrap text-[#737373] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer">Additional Information</p></div>
            <div className="sm:p-[24px] py-[24px] px-[12px] flex justify-center items-center" ><p className=" text-[#737373] font-montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer">Reviews </p> <p className=" text-[#23856D]">(0)</p></div>
        </div>
    </div>
    <div id=" main div" className="  flex justify-center">
        <div id="container" className=" pt-6 pb-12">
            <div id="row" className=" flex lg:flex-row flex-col gap-[30px]">
                <div className="bg-[url('/unsplash.png')]  sm:h-[372px] rounded-[5px] mr-4 mb-[21px] flex justify-between  w-[321px] h-[271px] bg-cover sm:bg-center bg-left-bottom px-10 pt-[119px] sm:pt-[260px]"></div>
                <div id="col-md-4" className=" w-[332px] flex flex-col gap-[30px]">
                    <h5 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] cursor-pointer  ">the quick fox jumps over</h5>
                    <h6 className=" font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /> <br />Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br />Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                    </div>

                <div className="w-[332px]">
                    <div className=" flex flex-col gap-[30px]">
                        <h5 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] cursor-pointer  ">the quick fox jumps over</h5>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div> <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-[30px] pt-[25px]">
                        <h5 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] cursor-pointer  ">the quick fox jumps over</h5>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div> 
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">the quick fox jumps over the lazy dog</h6>
                            </div> 
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</div>
  )
}

export default Productdescription