import Image from "next/image";

export default function Solutions() {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(4,1fr)" }}
      className="grid my-10 px-20 gap-16 relative text-center"
    >
      <div className="flex flex-col justify-center border-b-[6px] hover:border-b-blue-800 items-center border py-10 px-6  rounded-3xl">
        <div className="">
          <Image
            height={100}
            width={100}
            src={"/images/Food  Icon.svg"}
            alt=""
          />
        </div>
        <div className="my-6 text-xl font-bold">Food</div>
        <div className="">
          Lorem ipsum dolor sit amet elit.Lorem ipsum dolor sit amet elit.
        </div>
      </div>
      <div className="flex flex-col justify-center border-b-[6px] hover:border-b-blue-800 items-center border py-10 px-6  rounded-3xl">
        <div className="">
          <Image
            height={100}
            width={100}
            src={"/images/Grocery  Icon.svg"}
            alt=""
          />
        </div>
        <div className="my-6 text-xl font-bold">Grocery</div>
        <div className="">
          {" "}
          Lorem ipsum dolor sit amet elit.Lorem ipsum dolor sit amet elit.
        </div>
      </div>
      <div className="flex flex-col justify-center border-b-[6px] hover:border-b-blue-800 items-center border py-10 px-6  rounded-3xl">
        <div className="">
          <Image
            height={100}
            width={100}
            src={"/images/Courier  Icon.svg"}
            alt=""
          />
        </div>
        <div className="my-6 text-xl font-bold">Courier</div>
        <div className="">
          {" "}
          Lorem ipsum dolor sit amet elit.Lorem ipsum dolor sit amet elit.
        </div>
      </div>
      <div className="flex flex-col justify-center border-b-[6px] hover:border-b-blue-800 items-center border py-10 px-6  rounded-3xl">
        <div className="">
          <Image
            height={100}
            width={100}
            src={"/images/Logistics  Icon.svg"}
            alt=""
          />{" "}
        </div>
        <div className="my-6 text-xl font-bold">Logistics</div>
        <div className="">
          {" "}
          Lorem ipsum dolor sit amet elit.Lorem ipsum dolor sit amet elit.
        </div>
      </div>
    </div>
  );
}
