import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function Tracking() {
  return (
    <div className="relative">
      <Image
        className="w-[100vw] absolute h-80"
        width={"100"}
        height="10"
        src={"/images/Tracking-bg.png"}
        alt=""
      />
      <div className="">
        <div className="flex relative items-center justify-center text-white px-32 my-11">
          <div className="flex-1 pt-20 text-start">
            <div className="text-3xl my-1 font-bold">
              Advanced Fleet Tracking
            </div>
            <div className="text-3xl my-1 font-bold">Solution Tracker</div>
            <div className="flex text-xl gap-20 mt-10 mb-20">
              <div className="">Get Started</div>
              <div className="flex gap-4 items-center">
                <IoMdArrowDropright className="text-xl bg-white text-[#5752d9ff] rounded-full" />
                <div className="">Watch how it works</div>
              </div>{" "}
            </div>
          </div>
          <div className="flex-1">
            <Image
              className="absolute top-0"
              width={600}
              height={300}
              alt=""
              src={"/images/tracking-user.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
