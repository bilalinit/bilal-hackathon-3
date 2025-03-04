"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search, User } from "lucide-react";
import { Heart } from "lucide-react";
import { useAppContext } from "@/context";

import Image from "next/image";
import Link from "next/link";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import insta from "../assets/insta.png";
import tube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twiter from "../assets/twiter.png";
import drop from "../assets/dropdown.png";
//import login from "../assets/login.png";
//import search from "../assets/search.png";
//import userinterface from "../assets/user-interface.png";
//import cart from "../assets/cart icon.png";
//import fav from "../assets/fav icon.png";
//import cartxs from "../assets/cart icon xs.png";
//import menuxs from "../assets/menu xs.png";
//import searchxs from "../assets/search xs.png";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const NavBar = ({ product }: { product: Product[] }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [user] = useAuthState(auth);

  const { cart } = useAppContext();

  const [cartnum, setcartnum] = useState(0);


  useEffect(() => {
   setcartnum(  cart.length);
  }, [cart])
  

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (query.trim() !== "") {
      const filtered = product.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear results if query is empty
    }
  };

  return (
    <div className="lg:h-[136px] sticky top-0 z-50 md:relative bg-white">
      <div
        id="nav dark"
        className="h-[58px] pt-[9px] bg-[#252B42] lg:block hidden"
      >
        <div className="h-[46px]">
          <div className="h-[46px]">
            <div className="h-[46px] flex justify-between px-[24px]">
              <div className="flex">
                <Image src={phone} alt="phone" className="" />
                <Image src={mail} alt="mail" className="" />
              </div>
              <div className="w-auto h-auto flex gap-[10px] p-[10px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">
                Follow Us and get a chance to win 80% off
              </div>
              <div className="w-auto h-auto p-[10px] flex gap-[10px]">
                <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">
                  Follow Us :
                </h6>
                <div className="w-[120px] h-[26px] flex gap-[6px]">
                  <a href="https://www.instagram.com/mizuu.edit/">
                    <Image src={insta} alt="insta logo" />
                  </a>
                  <a href="https://www.youtube.com">
                    <Image src={tube} alt="tube logo" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Image src={facebook} alt="facebook logo" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/Free_Palestine_Movement">
                    <Image src={twiter} alt="twitter logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="nav light" className="mt-[12px] flex px-9">
        <Link
          href={"../"}
          className="w-[187px] h-[58px] pt-[13px] md:block hidden"
        >
          <h3 className="font-montserrat font-bold text-[24px] leading-[24px]  tracking-[0.2px] transform transition-transform duration-700 hover:scale-110 hover:translate-2">
            Bandage
          </h3>
        </Link>

        <div className="w-full flex flex-col gap-[83px] md:hidden">
          <div className="flex items-center justify-between gap-[28px]">
            <div className="h-[58px] sm:left-[38px] pt-[13px]">
              <Link
                href={"/"}
                className="font-montserrat font-bold text-[24px] leading-[24px] tracking-[0.2px]"
              >
                Bandage
              </Link>
            </div>
            <div className="flex gap-8">
              <Popover>
                <PopoverTrigger>
                  <Search className="block md:hidden" />
                </PopoverTrigger>
                <PopoverContent className=" flex flex-col gap-5">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    className="border rounded px-4 py-2 w-full h-[40px] left-0"
                  />
                  {searchTerm.trim() !== "" && (
                    <div className="mt-4">
                      {filteredProducts.length > 0 ? (
                        <ul className=" gap-5">
                          {filteredProducts.map((item) => (
                            <Link
                              href={`../product/${item.slug}`}
                              key={item._id}
                              className="border flex p-2 items-center my-2 gap-5 rounded shadow"
                            >
                              <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="w-[40px] h-[40px] object-cover"
                              />
                              <div className=" flex flex-col">
                                <h2 className="font-bold">{item.title}</h2>
                                <p className="text-gray-600 font-bold">
                                  ${item.price}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      ) : (
                        <p>No products found.</p>
                      )}
                    </div>
                  )}
                </PopoverContent>
              </Popover>
              <Link href={"../cart"} className="flex">
                <ShoppingCart className="block md:hidden" /> <span className="text-[14px]">{cartnum}</span>
              </Link>
              <button onClick={toggleMenu}>
                <Menu className="block md:hidden" />
              </button>
            </div>
          </div>

          {isMenuVisible && (
            <div className="h-auto w-auto flex md:hidden items-center justify-center flex-col gap-[30px] ">
              {!user && (
                <div className="flex gap-3">
                  <Link
                    className="transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-medium text-[24px] leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500"
                    href={"../sign-up"}
                  >
                    Sign up
                  </Link>
                  <p className="text-gray-500">/</p>
                  <Link
                    className="transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-medium text-[24px] leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500"
                    href={"../sign-in"}
                  >
                    Sign in
                  </Link>
                </div>
              )}
              {user && (
                <Dialog>
                  <DialogTrigger>
                    <User />
                  </DialogTrigger>
                  <DialogContent className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-sm">
                    <DialogHeader className="text-center">
                      <DialogTitle>
                        <h1 className="font-clash text-[24px] font-bold text-gray-800">
                          User Profile
                        </h1>
                      </DialogTitle>
                      <DialogDescription>
                        <p className="text-sm text-gray-500">
                          Here is your profile information
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 text-center">
                      {/* User Details */}
                      <p className="text-lg font-semibold text-gray-800">
                        {user?.displayName || "John Doe"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {user?.email || "example@email.com"}
                      </p>
                    </div>
                    {/* Logout Button */}
                    <div className="mt-6 flex flex-col gap-3">
                    <Link href={"../orderhistory"}
                        className="w-full border hover:bg-gray-200 text-center text-gray-500 font-medium py-2 px-4 rounded-md transition duration-200"
                      >
                        Order history
                      </Link>
                      <button
                        className="w-full border hover:bg-gray-200 text-gray-500 font-medium py-2 px-4 rounded-md transition duration-200"
                        onClick={() => signOut(auth)}
                      >
                        Logout
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              <Link
                className=" transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-medium text-[24px] leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className=" transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-medium text-[24px] leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500"
                href={"/"}
              >
                Product
              </Link>
              <Link
                className=" transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-medium text-[24px] leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500"
                href={"../productlisting"}
              >
                Pricing
              </Link>
              <Link
                className=" transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-medium text-[24px] leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500 mb-10"
                href={"/"}
              >
                Contact
              </Link>
            </div>
          )}
        </div>

        <div className="h-[58px] w-full justify-between items-center md:flex hidden ">
          <div className="w-auto h-auto sm:mr-0 ">
            <ul className="flex gap-[15px] items-center justify-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center cursor-pointer text-[#737373]">
              <Link
                href={"/"}
                className="transform transition-transform duration-600 hover:scale-110 hover:translate-2"
              >
                Home
              </Link>
              <Link
                href={"../productlisting"}
                className="transform transition-transform duration-600 hover:scale-110 hover:translate-2"
              >
                <Image src={drop} alt="dropdown icon" />
              </Link>
              <Link
                href={""}
                className="transform transition-transform duration-600 hover:scale-110 hover:translate-2"
              >
                About
              </Link>
              <li className="transform transition-transform duration-600 hover:scale-110 hover:translate-2">
                Blog
              </li>
              <li className="transform transition-transform duration-600 hover:scale-110 hover:translate-2">
                Contact
              </li>
              <li className="transform transition-transform duration-600 hover:scale-110 hover:translate-2">
                Pages
              </li>
            </ul>
          </div>

          <div className="w-auto h-auto">
            <ul className="flex items-center gap-5">
              {/* Show userinterface image only when the user is logged in */}
              {!user && (
                <div id="logins" className="flex gap-1 items-center">
                  <Link href={"../sign-in"}>
                    <p className=" text-nowrap transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-semibold text-[16px] text-blue-400 leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500">
                      login
                    </p>
                  </Link>
                  <p className="text-gray-500"> / </p>
                  <Link href={"../sign-up"}>
                    <p className="transform transition-transform duration-600 hover:scale-110 hover:translate-2 font-montserrat font-semibold text-[16px] text-blue-400 leading-[24px] tracking-[0.2px] hover:text-slate-500 duration-500">
                      register
                    </p>
                  </Link>
                </div>
              )}
              {user && (
                <li className="relative flex items-center">
                  <Dialog>
                    <DialogTrigger>
                      <User className="w-[22px] h-[22px] filter grayscale mix-blend-multiply transform transition-transform duration-600 hover:scale-110 hover:translate-2" />
                    </DialogTrigger>
                    <DialogContent className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-sm">
                      <DialogHeader className="text-center">
                        <DialogTitle>
                          <h1 className=" text-[24px] font-bold text-gray-800">
                            User Profile
                          </h1>
                        </DialogTitle>
                        <DialogDescription>
                          <p className="text-sm text-gray-500">
                            Here is your profile information
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6 text-center">
                        {/* User Details */}
                        <p className="text-lg font-semibold text-gray-800">
                          {user?.displayName || "John Doe"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {user?.email || "example@email.com"}
                        </p>
                      </div>
                      {/* Logout Button */}
                      <div className="mt-6 flex flex-col gap-3">
                      <Link href={"../orderhistory"}
                          className="w-full border hover:bg-gray-200 text-center text-gray-500 font-medium py-2 px-4 rounded-md transition duration-200"
                        >
                          Order history
                        </Link>

                        <button
                          className="w-full border hover:bg-gray-200 text-gray-500 font-medium py-2 px-4 rounded-md transition duration-200"
                          onClick={() => signOut(auth)}
                        >
                          Logout
                        </button>
                        
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              )}
              <li className="relative flex items-center">
                <div className="sm:flex ga hidden">
                  <Popover>
                    <PopoverTrigger>
                      <Search className="w-[18px] filter grayscale mix-blend-multiply h-[18px] transform transition-transform duration-600 hover:scale-110 hover:translate-2" />
                    </PopoverTrigger>
                    <PopoverContent className=" flex flex-col gap-5">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search products..."
                        className="border rounded px-4 py-2 w-full h-[40px] left-0"
                      />
                      {searchTerm.trim() !== "" && (
                        <div className="mt-4">
                          {filteredProducts.length > 0 ? (
                            <ul className=" gap-5">
                              {filteredProducts.map((item) => (
                                <Link
                                  href={`../product/${item.slug}`}
                                  key={item._id}
                                  className="border flex p-2 items-center my-2 gap-5 rounded shadow"
                                >
                                  <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                    className="w-[40px] h-[40px] object-cover"
                                  />
                                  <div className=" flex flex-col">
                                    <h2 className="font-bold">{item.title}</h2>
                                    <p className="text-gray-600 font-bold">
                                      ${item.price}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </ul>
                          ) : (
                            <p>No products found.</p>
                          )}
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                </div>
              </li>
              <Link href={"../cart"} className="flex transform transition-transform duration-600 hover:scale-110 hover:translate-2">
                <ShoppingCart className="w-[18px] filter grayscale mix-blend-multiply h-[18px] " /><span className="text-[12px]">{cartnum}</span>
              </Link>
              <li className="w-[56px] h-[46px] items-center flex">
                <Heart className="w-[18px] filter grayscale mix-blend-multiply h-[18px] transform transition-transform duration-600 hover:scale-110 hover:translate-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
