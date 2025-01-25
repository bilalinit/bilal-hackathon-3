import Image from "next/image"
import spon1 from "../assets/spon1.png"
import spon2 from "../assets/spon2.png"
import spon3 from "../assets/spon3.png"
import spon4 from "../assets/spon4.png"
import spon5 from "../assets/spon5.png"
import spon6 from "../assets/spon6.png"

const Sponsors = () => {
  return (
    <div className="sm:px-[20.16vw] sm:py-[58px] px-0 py-[110px] bg-[#FAFAFA] ">
    <div className="sm:grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2  flex flex-col justify-center  sm:gap-[30px] gap-[60px] items-center ">
    <Image src={spon1} alt="" className=" " />
    <Image src={spon2} alt="" className=" " />
    <Image src={spon3} alt="" className=" " />
    <Image src={spon4} alt="" className=" " />
    <Image src={spon5} alt="" className=" " />
    <Image src={spon6} alt="" className=" " />
    </div>
</div>
  )
}

export default Sponsors