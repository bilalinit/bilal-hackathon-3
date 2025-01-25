import Image, { StaticImageData } from "next/image"
import color from "../assets/product-colors.png"

interface typeprop {
    image: string | StaticImageData
    title : string
    price : number
    discountPercentage : number
}

const Bestcard = (props : typeprop) => {
    const {image , title , price, discountPercentage} = props
    
  return (
    <div className=" bg-[#FFFFFF] mb-[50px]">
      <div className="h-[500px] w-auto">
    <Image src={image} alt="image" width={400} height={500} className="min-h-[500px] max-h-[500px]   object-cover" /></div>
    <div className=" flex flex-col py-[25px] px-[35px] gap-[10px] justify-center items-center ">
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">{title}</h5>
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">English Department</p>
        <div id="price" className=" flex gap-[5px]">
            <h5 className="text-[#BDBDBD] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">${discountPercentage}</h5>
            <h5 className="text-[#23856D] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">${price}</h5>
        </div>
        <Image src={color} alt=""/>
    </div>
</div>
  )
}

export default Bestcard