import Image, { StaticImageData } from "next/image"
import color from "../assets/product-colors.png"

interface typeprop {
    image: string | StaticImageData
}

const Productcard = (props : typeprop) => {
    const {image} = props
  return (
    <div> <div className=" mb-[50px] ">
      <Image src={image} alt="image" width={400} height={500} className="min-h-[500px] max-h-[500px] object-cover" />

    <div className=" flex flex-col py-[25px] px-[35px] gap-[10px] justify-center items-center ">
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Graphic Design</h5>
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">English Department</p>
        <div id="price" className=" flex gap-[5px]">
            <h5 className="text-[#BDBDBD] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">$16.48</h5>
            <h5 className="text-[#23856D] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">$6.48</h5>
        </div>
        <Image src={color} alt=""/>
    </div>
</div></div>
  )
}

export default Productcard