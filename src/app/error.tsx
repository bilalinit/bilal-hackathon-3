"use client"
import Link from "next/link";
import Image from "next/image";
import errorImage from "../app/assets/errorr.png"; 

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="text-center">
        <Image src={errorImage} alt="Error" width={600} height={600}  className=" "/>
        
        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-slate-900  text-white rounded-lg hover:bg-slate-700 duration-700">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
