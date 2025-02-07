import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

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
}

const useProducts = () => {
  const [sanityData, setSanityData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch<Product[]>(
          `*[_type == "product"] | order(_createdAt desc)[0...8] {
            title,
            price,
            "imageUrl": productImage.asset->url,
            tags,
            isNew,
            _id,
            discountPercentage,
            'slug': slug.current
          }`
        );
        setSanityData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unexpected error occurred."));
        }
        console.error("Error fetching products from Sanity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    products: sanityData,
    loading,
    error,
  };
};

export default useProducts;
