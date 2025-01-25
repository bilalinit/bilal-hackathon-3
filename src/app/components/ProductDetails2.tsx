"use client"
import Image from "next/image"
import { toast } from "sonner"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import rightaero from "../assets/right aero black.png"
import { useAppContext } from '@/context';

import stars from "../assets/stars.png"
import color from "../assets/colorsforproducts.png"
import heart from "../assets/heart icon.png"
import cart from "../assets/cart icon2.png"
import eye from "../assets/eye icon.png"
import React, { useState } from 'react'

interface Product {
    price: number;
    title: string;
    imageUrl: string;
    tags: string[];
    isNew: boolean;
    _id: string;
    discountPercentage: number;
    slug: string;
    description: string;
    quantity: number;
  }
  

const ProductDetails2 = ({ product }: { product: Product }) => {
    const { AddToCart } = useAppContext();
const [first, setfirst] = useState(0)
    
    const res = [product]
  return (
    <>
    {res.map((elem : Product)=>{
          return (<div key={elem._id}>
            <div  className="  flex items-center mb-20 sm:mb-0 justify-center ">
            <div id=" container" className="w-auto h-auto pb-[48px]  ">
                <div id="row" className=" flex lg:flex-row flex-col gap-[30px] ">
                    <div id="col-md-6" className="sm:w-[510px] w-[348px]   sm:h-[550px]">
                        <div id="carousal2" className="sm:w-[506px] sm:h-[546px]  flex flex-col gap-[21px] justify-center">
                          <div className="lg:w-[530px] w-auto  overflow-hidden ">  
                          <Image src={elem.imageUrl} alt="asda" width={500} height={500} className="h-[500px] object-cover w-full " /></div>
                            <div id="carousel indicators" className=" flex gap-[19px]" >
                            <Image src={elem.imageUrl} width={400} height={400} className="w-[130px] h-[80px] " alt=""/>
                                <Image src={elem.imageUrl} width={400} height={400} className="w-[130px] h-[80px] opacity-50 " alt=""/>
                            </div>
                        </div>
                    </div>
                    <div id="text content" className="sm:w-[510px] w-[348px]  h-[471px] pt-[11px] px-[23px] ">
                        <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] ">{elem.title}</h4>
                        <Image src={stars} alt="" className="w-[221.07px] h-[24px] mt-3" />
                        <h5 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] mt-[20px] " >${elem.price}</h5>
                        <div className=" flex gap-[5px] mt-[5px]">
                            <h6 className="text-[#858585] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer ">Availability  :</h6>
                            <h6 className="text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer ">{elem.isNew} In stock</h6>
                        </div>
                        <p className="text-[#858585] mt-[32px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] cursor-pointer">{elem.description.slice(0,300)}</p>
                        <div className="sm:w-[445px]  mt-[27px] border border-[#BDBDBD] "></div>
                        <Image src={color} alt="" className="w-[150px] h-[30px] mt-[29px]"/>
        
                        <div id=" products actions" className="flex mt-[67px] gap-[10px] ">
                            <button className="py-[10px] px-[20px] rounded-[5px] flex justify-center items-center bg-[#23A6F0] hover:bg-blue-500"><h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] cursor-pointer text-white">Select Options</h6></button>
                            <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer"><Image src={heart} alt="" className="w-[20px] h-[20px]"/></div>
                            <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer"><Image src={cart} onClick={()=>{ AddToCart(product); setfirst(first + 1); toast.success("Item added to cart") }} alt="" className="w-[20px] h-[20px]"/> <p className="text-xs font-mono">{first }</p> </div>
                            <Drawer>
                           
                                <DrawerTrigger> <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-slate-200 rounded-lg cursor-pointer"><Image src={eye} alt="" className="w-[20px] h-[20px]"/></div></DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                    <DrawerTitle>Need a closer look?</DrawerTitle>
                                    <DrawerDescription><Image src={elem.imageUrl} height={400} width={400} alt="" className=" h-[400px] object-cover"/></DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                    <DrawerClose>
                                    </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                                </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
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
                <Image src={elem.imageUrl} width={700} height={700} alt="" className="rounded-lg w-[300px] object-cover bg-cover"/>
                <div id="col-md-4" className=" w-[332px] flex flex-col gap-[30px]">
                    <h5 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] cursor-pointer  ">{elem.title}</h5>
                    <h6 className=" font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">{elem.description.slice(0,800)}</h6>
                    </div>

                <div className="w-[332px]">
                    <div className=" flex flex-col gap-[30px]">
                        <h5 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] cursor-pointer  ">Tags</h5>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[0]}</h6>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[2]}</h6>
                            </div> <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[3]}</h6>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[4]}</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-[30px] pt-[25px]">
                        <h5 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] cursor-pointer  ">More tags</h5>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[0]}</h6>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[3]}</h6>
                            </div> 
                            <div className="flex gap-[20px] items-center">
                                <Image src={rightaero} alt="" className="w-[9px] h-[16px]"/>
                                <h6 className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">{elem.tags[1]}</h6>
                            </div> 
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</div>
</div>
        )
    })}</>
  )
}

export default ProductDetails2