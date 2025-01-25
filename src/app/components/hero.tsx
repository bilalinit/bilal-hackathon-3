

const Hero = () => {
  return (
    <div className=" text-[#252B42]   sm:px-[195px] px-[40.5px] ">
        <div className=" py-[80px] flex flex-col gap-[48px] items-center justify-center ">
            <div id="row" className="  flex flex-col items-center justify-center gap-[10px]">
                <h2 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] ">EDITOR’S PICK</h2>
                <p className=" font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] ">Problems trying to resolve the conflict between </p>
            </div>
            <div id="row2" className="flex flex-col sm:flex-row gap-[30px]">
            <div className="bg-[url('/heroimgs1.jpg')] py-[26px] px-[31px] sm:w-[40.56vw] sm:h-[500px] w-[324px] h-[500px] flex items-end bg-cover bg-center">                    
                <div className="px-[5.39vw] py-[1.90vh] bg-white max-w-max"><h2 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">MEN</h2></div>
                </div>
                <div className="bg-[url('/heroimgs2.jpg')] py-[26px] px-[31px] sm:w-[18.5vw] sm:h-[500px] w-[325px] h-[500px] flex items-end bg-cover bg-center">
                    <div className="px-[2.74vw] py-[1.90vh] bg-white max-w-max"><h2 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">WOMEN</h2></div>
                </div>
                <div className="  flex flex-col gap-[16px]">
                    <div className="bg-[url('/heroimgs3.jpg')] py-[26px] px-[31px] sm:w-[18.5vw] sm:h-[240px] w-[325px] h-[242px] flex items-end  bg-cover bg-center "> 
                        <div className="px-[2.08vw] py-[1.90vh] bg-white max-w-max"><h2 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">ACCESSORIES</h2></div>
                    </div>
                    <div className="bg-[url('/heroimgs4.jpg')] py-[26px] px-[31px] sm:w-[18.5vw] sm:h-[240px] w-[325px] h-[242px] flex items-end  bg-cover bg-center "> 
                        <div className="px-[1.35vw] py-[1.90vh] bg-white max-w-max"><h2 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">ACCESSORIES</h2></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero