import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div className="flex justify-around items-center px-52 my-20 ">
      <div className="">
        <Image
          className="scale-[1.5]"
          height={100}
          width={100}
          src={"/images/5.jpg"}
          alt="image"
        />
      </div>
      <div className="overflow-hidden">
        <Image
          className="scale-[1.8] "
          height={100}
          width={100}
          src={"/images/Nykaa.jpg"}
          alt="image"
        />
      </div>
      <div className="">
        <Image
          className="scale-[.8]"
          height={100}
          width={100}
          src={"/images/1.png"}
          alt="image"
        />
      </div>
      <div className="">
        <Image
          height={100}
          className="scale-[1.2]"
          width={100}
          src={"/images/3.webp"}
          alt="image"
        />
      </div>
      <div className="">
        <Image
          height={100}
          className="scale-[1.5]"
          width={100}
          src={"/images/Bewakoof.jpeg"}
          alt="image"
        />
      </div>
    </div>
  );
}
