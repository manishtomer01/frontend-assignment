import Image from "next/image";
import React from "react";

export default function Interface() {
  return (
    <div className="flex justify-center py-20 bg-[#f2f6ffff] flex-col gap-12 items-center">
      <div className="text-4xl font-bold">Delivery Business Interfaces</div>
      <div className="flex gap-20 ">
        <div className="py-5 px-10 border rounded-xl hover:text-white hover:bg-[#37c8deff]">
          Dashboard
        </div>
        <div className="py-5 px-10 border rounded-xl hover:text-white hover:bg-[#37c8deff]">
          Customer App
        </div>
        <div className="py-5 px-10 border rounded-xl hover:text-white hover:bg-[#37c8deff]">
          Agent App
        </div>
      </div>
      <div className="">
        <Image
          height={800}
          width={800}
          src={"/images/dashboard.png"}
          alt="dashboard"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
