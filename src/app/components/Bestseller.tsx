"use client"
import { client } from "@/sanity/lib/client";
import Bestcard from "./bestcard";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductPreview {
  title: string;
  price: number;
  imageUrl: string;
  tags: string[];
  isNew: boolean;
  _id: string;
  dicountPercentage: number;
  slug: string;
}

const Bestseller = () => {
  const [sanityData, setSanityData] = useState<ProductPreview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data: ProductPreview[] = await client.fetch(`*[_type == "product"] | order(_createdAt desc)[0...8] {
          title,
          price,
          "imageUrl": productImage.asset->url,
          tags,
          isNew,
          _id,
          dicountPercentage, 
          'slug': slug.current
        }`);

        if (!data || data.length === 0) {
          throw new Error("No products available.");
        }
        setSanityData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch products.");
        } else {
          setError("Failed to fetch products.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex justify-center pt-[80px] px-5">
      <div id="container" className="flex flex-col gap-[48px]">
        <div id="text-container" className="flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">
            Featured Products
          </h4>
          <h2 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            EDITOR’S PICK
          </h2>
          <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {loading ? (
          <p className="text-center font-montserrat">Loading products...</p>
        ) : error ? (
          <p className="text-center font-montserrat text-red-500">{error}</p>
        ) : (
          <div id="main-cards" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {sanityData.map((elem: ProductPreview) => (
              <Link
                key={elem._id}
                href={`/product/${elem.slug}`}
                className="transform transition-transform duration-1000 hover:scale-105 hover:translate-2"
              >
                <Bestcard
                  discountPercentage={elem.dicountPercentage}
                  image={elem.imageUrl}
                  title={elem.title}
                  price={elem.price}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bestseller;
