
"use client"
//import { client } from "@/sanity/lib/client";
import Productcard from "./Productcard"
//import { link } from "fs";
import Link from "next/link";
//import { useEffect } from "react";
/*const data = [
    {
        image: "bg-[url('/pl1.jpeg')]"
    },
    {
        image: "bg-[url('/pl2.jpeg')]"
    },    {
        image: "bg-[url('/pl3.jpeg')]"
    },    {
        image: "bg-[url('/pl4.jpeg')]"
    },    {
        image: "bg-[url('/pl5.jpeg')]"
    },    {
        image: "bg-[url('/pl6.jpeg')]"
    },
    {
        image: "bg-[url('/pl7.jpeg')]"
    },
    {
        image: "bg-[url('/pl8.jpeg')]"
    },
    {
        image: "bg-[url('/pl9.jpeg')]"
    },
    {
        image: "bg-[url('/pl10.jpeg')]"
    },
    {
        image: "bg-[url('/pl11.jpeg')]"
    },
    {
        image: "bg-[url('/pl12.jpeg')]"
    },
]*/

interface Product {
    price: number;
    title: string;
    imageUrl: string;
    tags: string[];
    isNew: boolean;
    _id: string;
    dicountPercentage: number;
    slug: string;
    description: string;
  }
  
import useProducts from "../lib/data"

const Products =  () => {
    const { products } = useProducts();
   const    sanityData = products 
  return (
    <div className=" flex justify-center pt-[80px] pb-[48px] px-5 ">
    <div id="container" className=" flex flex-col gap-[48px] ">
        <div id="main-cards" className=" grid sm:grid-cols-2 lg:grid-cols-4  grid-cols-1 gap-[30px]">
            {sanityData.map((elem : Product)=>{
                return (
                    <Link key={elem._id} href={`/product/${elem.slug}`} className="transform transition-transform duration-1000 hover:scale-105 hover:translate-2 " >
                    <Productcard key={elem._id} image={elem.imageUrl} price={elem.price} />
                    </Link>
                )
            })}
        </div>

    <div className=" flex justify-center   rounded-[6.73px] ">
            <button className="p-[25px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD] bg-[#F3F3F3] border-[#BDBDBD] border rounded-l-[6.73px] ">First</button>
            <div className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] border border-[#E9E9E9] bg-white py-[25px] px-[20px] ">1</div>
            <div className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white bg-[#23A6F0] border border-[#E9E9E9] py-[25px] px-[20px] ">2</div>
            <div className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] bg-white border border-[#E9E9E9] py-[25px] px-[20px] ">3</div>
            <button className="p-[25px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] border border-[#BDBDBD] bg-white rounded-r-[6.73px]  ">Next</button>
        </div>
    </div>
</div>
  )
}

export default Products