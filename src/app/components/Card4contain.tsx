import { StaticImageData } from "next/image"

interface proptype {
    image: string | StaticImageData,
    heading: string,
    paragraph: string
}

const Card4contain = (props: proptype) => {
    const {image,heading,paragraph} = props
  return (
    <div>
    <div id="card" className={`${image} bg-cover bg-center sm:w-[205px] sm:h-[223px] w-[332px] h-[300px]  flex flex-col justify-center text-center `} >
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">{heading}</h5>
            <p className="font-montserrat font-bold text-[14px] leading-[20px] tracking-[0.2px] text-white">{paragraph}</p>
        </div>
</div>
  )
}

export default Card4contain