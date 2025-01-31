import Container2 from "../components/Container2"
import Container3 from "../components/Container3"
import Filterrow from "../components/Filterrow"
import Footer2 from "../components/Footer2"
import Products from "../components/Products"
import Sponsors from "../components/Sponsors"

const Productlisting = () => {
  return (
    <div>
        <Container2/>
        <Container3/>
        <Filterrow/>
        <div className=" sm:block hidden">
          <Sponsors/>
        </div>
        <div className="sm:block hidden">
          <Footer2 />
        </div>
        <Products/>
        <div className="block sm:hidden">
          <Sponsors  />
        </div>
        <div className="block sm:hidden">
           <Footer2 />
        </div>
        
    </div>
  )
}

export default Productlisting