import Image from "next/image";

export default function MakeUs() {
  return (
    <div className="relative">
      <div className="flex gap-32 px-36 py-10 ">
        <div className="flex-1">
          <div className="flex justify-end">
            {" "}
            <Image
              src={"/images/building.png"}
              height="100"
              width="100"
              className="w-[400px] h-[90vh] rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 py-10">
          <div className="text-4xl font-bold">What Make us</div>
          <div className="text-4xl font-bold">Different</div>
          <div className="mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur quas, atque porro aliquid deserunt temporibus, totam
            neque cum autem, quod iure.
          </div>
        </div>
      </div>
      <div
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
        className="grid absolute left-[30%] bottom-32 p-10 rounded-lg"
      >
        <div className="">
          <Image src={"/images/Suitcase.svg"} height={50} width={50} alt="" />
          <div className="text-lg my-2">Experienced</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, iure.
          </div>
          <div className="text-[#0550ffff] mt-6">Learn more</div>
        </div>
        <div className="">
          {" "}
          <Image
            src={"/images/competitive-price.svg"}
            height={50}
            width={50}
            alt=""
          />
          <div className="text-lg my-2">Competitive Price</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, iure.
          </div>
          <div className="text-[#0550ffff] mt-6">Learn more</div>
        </div>
        <div className="">
          {" "}
          <Image src={"/images/on-time.svg"} height={50} width={50} alt="" />
          <div className="text-lg my-2">On Time</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, iure.
          </div>
          <div className="text-[#0550ffff] mt-6">Learn more</div>
        </div>
        <div className="">
          {" "}
          <Image
            src={"/images/best-material.svg"}
            height={50}
            width={50}
            alt=""
          />
          <div className="text-lg my-2">Best Materials</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, iure.
          </div>
          <div className="text-[#0550ffff] mt-6">Learn more</div>
        </div>
      </div>
    </div>
  );
}
