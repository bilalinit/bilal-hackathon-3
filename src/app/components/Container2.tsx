import Image from "next/image";
import side from "../assets/side.png";

const Container2 = () => {
  return (
    <div className=" bg-[#FAFAFA] py-[48px]">
      <div className="sm:flex sm:flex-row flex flex-col items-center justify-between sm:px-[14.26vw] px-[4.17vw] sm:py-[24px]">
        <div>
          <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] ">
            Shop
          </h3>
        </div>

        <div className=" flex items-center ">
          <div className="flex items-center gap-[15px]">
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
              Home
            </p>
            <Image src={side} alt="" className=" " />
            <h5 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">
              Shop
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container2;
