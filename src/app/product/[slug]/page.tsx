import { client } from "@/sanity/lib/client"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import Footer2 from "@/app/components/Footer2"


import Bestseller from "@/app/components/Bestseller"
import ProductDetails2 from "@/app/components/ProductDetails2"

interface props {
    params: {
        slug: string
    }    
}

const page = async ({ params }: props) => {
    const data = await client.fetch(
        `*[_type == "product" && slug.current == "${params.slug}"]{
          price,
          title,
          "imageUrl": productImage.asset->url,
          tags,
          isNew,
          _id,
          discountPercentage,
          'slug': slug.current,
          description,
          tags
        }`
    );
    
  return (
      <>
      
      <Breadcrumbs/>
      <ProductDetails2  product={data[0]} />
      
      <Bestseller />
    <Footer2/>
    </>
  )
}

export default page