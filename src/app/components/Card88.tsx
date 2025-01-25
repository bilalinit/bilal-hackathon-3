import Image, { StaticImageData } from "next/image"
import new1 from "../assets/pic.png"
import new2 from "../assets/pic2.png"
import new3 from "../assets/newtag.png"

interface typeprop {
    image: string | StaticImageData
}


const Card88 = (props :typeprop) => {
    const {image} = props
  return (
    <div id="card-1 " className="">
    <div className={`${image}  max-w-auto h-[300px] bg-cover sm:bg-center bg-left-bottom pt-[20px] pl-[20px]` }>
        <Image src={new3} alt=""/></div>
        <div id="card-contant" className="pt-[25px]  pr-[25px] pl-[25px] pb-[35px] flex flex-col gap-[10px]">
            <div id="dtn" className="flex gap-[15px]">
                <p className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px] ">Google</p>
                <p className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px]">Trending</p>
                <p className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px]">New</p>
            </div>
        <h4 className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] ">Loudest à la Madison #1 
        Lintegral</h4>
        <p>We focus on ergonomics and meeting you where you work. Its only a keystroke away.</p>
        <Image src={new1} alt="" />
        <Image src={new2} alt="" /> 
</div>
</div>
  )
}

export default Card88