import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google"; // Import Google Font
import "./globals.css";
import NavBar from "./components/NavBar";
import { client } from "@/sanity/lib/client";
import { AppWrapper } from "@/context";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Add Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Optional custom CSS variable
  weight: ["400", "500", "600", "700"], // Specify the weights you want
});

export const metadata: Metadata = {
  title: "bandage",
  description: "an e-commerce website ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data;
  try {
    data = await client.fetch(
      `*[_type == "product"]{
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
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="flex h-screen w-auto justify-center items-center text-red-600">
        Failed to load products. Please try again later.
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex h-screen w-auto justify-center items-center text-gray-600">
        No products found.
      </div>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <NavBar product={data} />
        <AppWrapper>
          {children}
          <Toaster />
        </AppWrapper>
      </body>
    </html>
  );
}
