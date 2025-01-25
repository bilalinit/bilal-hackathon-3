"use client"
import Link from "next/link";
import Image from "next/image";
import errorImage from "../app/assets/error.png"; 

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <Image src={errorImage} alt="Error" width={600} height={600} />
        <h1 className="text-4xl font-bold text-red-600 mt-6">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mt-4">
          The page youre looking for doesnt exist or an unexpected error has occurred.
        </p>
        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
