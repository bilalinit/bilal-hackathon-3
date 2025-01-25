
import Bestseller2 from '../components/Bestseller2'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer2 from '../components/Footer2'
//import Navbar2 from '../components/navbar2'
import Productcard2 from '../components/Productcard2'
import Productdescription from '../components/Productdescription'
import Sponsors from '../components/Sponsors'

const page = () => {
  return (
    <div>
       
        <Breadcrumbs/>
        <Productcard2/>
        <Productdescription/>
        <Bestseller2/>
        <Sponsors/>
        <Footer2/>
    </div>
  )
}

export default page