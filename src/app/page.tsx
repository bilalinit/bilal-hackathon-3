import Bestseller from "./components/Bestseller";
import Carousel2 from "./components/carousel2";
import Crousel1 from "./components/crousel1";
import Featuredpost from "./components/featuredpost";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Universe from "./components/universe";

export default async function Home() {

      
  return (
    <div className=" w-full">
      
      <Crousel1/>
      <Hero/> 
      <Bestseller />
      <Carousel2/>
      <Universe/>
      <Featuredpost/>
      <Footer/>
    </div>
  );
}
