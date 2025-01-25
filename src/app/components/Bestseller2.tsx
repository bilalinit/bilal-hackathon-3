
import Bestsellercard from "./Bestsellercard"

const data = [
    {
        image: "bg-[url('/last1.jpeg')]"
    },
    {
        image: "bg-[url('/last2.jpeg')]"
    },    {
        image: "bg-[url('/last3.jpeg')]"
    },    {
        image: "bg-[url('/last4.jpeg')]"
    },    
    
]
const data2 = [
    {
        image: "bg-[url('/last5.jpeg')]"
    },
    {
        image: "bg-[url('/last6.jpeg')]"
    },    {
        image: "bg-[url('/last7.jpeg')]"
    },    {
        image: "bg-[url('/last8.jpeg')]"
    },
]


const Bestseller2 = () => {
  return (
    <div className=" flex justify-center pt-[80px] pb-[48px] bg-[#FAFAFA] ">
    <div id="container" className=" flex flex-col gap-[48px] ">
        <div>
            <h3 className="font-montserrat font-bold text-[24px]  leading-[32px] tracking-[0.1px]">BESTSELLER PRODUCTS</h3>
        </div>
        <div id="main-cards" className=" grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {data.map((elem,index)=>{
                return (
                    <Bestsellercard key={index} image={elem.image} />
                )
            })}
        </div>
        <div id="main-cards" className=" sm:grid hidden lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {data2.map((elem,index)=>{
                return (
                    <Bestsellercard key={index} image={elem.image} />
                )
            })}
        </div>

   
    </div>
</div>
  )
}

export default Bestseller2