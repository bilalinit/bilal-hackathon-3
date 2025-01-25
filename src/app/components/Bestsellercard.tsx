import { StaticImageData } from "next/image"

interface typeprop {
    image: string | StaticImageData
}

const Bestsellercard = (props : typeprop) => {
    const {image} = props
  return (
    <div> <div className=" bg-[#FFFFFF] mb-[50px]">
    <div className={`${image} sm:w-[239px] sm:h-[280px] w-[348px] h-[427px] bg-cover bg-center sm:pt-[123px] sm:pl-[80px] pt-[64px] pl-[92px] `}></div>
    <div className=" flex flex-col py-[25px] px-[35px] gap-[10px] justify-start  ">
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Graphic Design</h5>
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">English Department</p>
        <div id="price" className=" flex gap-[5px]">
            <h5 className="text-[#BDBDBD] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">$16.48</h5>
            <h5 className="text-[#23856D] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">$6.48</h5>
        </div>
      
    </div>
</div></div>
  )
}

export default Bestsellercard