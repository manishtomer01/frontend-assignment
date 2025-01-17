import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-[#5752d9ff] flex flex-col justify-center">
      <div className=" text-white flex justify-between items-center py-12 px-28">
        <div>
          <Image height={100} width={150} alt="" src={"/images/logo2.svg"} />
        </div>
        <div className="flex gap-20 items-center text-lg">
          <div className="hover:underline">Solutions</div>
          <div className="hover:underline">Products</div>
          <div className="hover:underline">About</div>
          <div className="hover:underline">Contact</div>
          <div className="bg-white text-[#5752d9ff] px-6 rounded-lg py-3">
            Login
          </div>
          <div className="hover:underline">Sign Up</div>
        </div>
      </div>
      <div className="flex relative items-center justify-center text-white px-32 my-11">
        <div className="flex-1 text-start">
          <div className="text-5xl my-4">SaaS Delivery</div>
          <div className="text-5xl my-4">Management</div>
          <div className="text-5xl my-4">Software</div>
          <div className="my-6">Track and optimize routes in real-time</div>
          <div className="flex font-bold text-xl gap-20 mt-10 mb-20">
            <div className="">Get Started</div>
            <div className="flex gap-4 items-center">
              <IoMdArrowDropright className="text-xl bg-white text-[#5752d9ff] rounded-full" />
              <div className="">Watch how it works</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            className="absolute top-0"
            width={80}
            height={80}
            alt=""
            src={"/images/dots1.png"}
          />
          <Image
            className="absolute top-0"
            width={400}
            height={400}
            alt=""
            src={"/images/banner-desktop.png"}
          />
          <Image
            className="absolute right-64 top-10"
            width={120}
            height={200}
            alt=""
            src={"/images/Mobile.png"}
          />
        </div>
      </div>
    </div>
  );
}
