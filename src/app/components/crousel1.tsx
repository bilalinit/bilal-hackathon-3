import Link from "next/link"


const Crousel1 = () => {
  return (
    <div className="  sm:h-[716px]  h-[753px]   ">
    <div  id="item" className=" sm:h-[716px] flex items-center justify-center  h-[753px] ">
        <div className="bg-[url('/hero1img.jpg')] w-full sm:px-[19.8vw] flex justify-center sm:justify-start   sm:h-[716px]  h-[753px] bg-cover bg-center ">

        <div id=" contanier" className="sm:w-auto sm:h-auto h-[705px] py-[112px] flex gap-[80px]  ">
            <div id="row" className="sm:w-auto sm:h-auto  h-auto  py-[48px]  flex items-center justify-center  flex-col gap-[30px]">
                <div id="content" className=" h-auto  sm:items-start  flex items-center justify-center flex-col gap-[35px]">
                    <h5 className="  font-bold font-montserrat text-[16px] leading-[24px]  tracking-[0.1px] text-white">SUMMER 2020</h5>
                    <h1 className=" w-[268px] text-center sm:text-start font-bold font-montserrat sm:text-[58px] text-[40px] sm:leading-[80px] leading-[50px] tracking-[0.2px] lg:text-nowrap text-white">NEW COLLECTION</h1>
                    <h4 className=" sm:w-[376px] w-[291px] sm:text-start font-normal font-montserrat text-[20px] leading-[30px] tracking-[0.2px] text-center text-white">We know how large objects will act, 
                    but things on a small scale.</h4>
                    <Link href={"../productlisting"} className=" w-[221px] h-auto rounded-[5px] py-[15px] px-[40px] bg-[#2DC071] transform transition-transform duration-1000 hover:scale-110 hover:translate-2  "><h3 className=" text-nowrap font-bold font-montserrat text-[24px] leading-[32px] tracking-[0.1px] text-center text-white">SHOP NOW</h3> </Link>
                </div>
                

                
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Crousel1