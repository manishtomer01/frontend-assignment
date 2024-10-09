import Image from "next/image";

export default function Proof() {
  return (
    <div className="bg-[#5752d9ff] p-20 text-white">
      <div className="text-3xl text-center font-bold">All in one proof for</div>
      <div className="text-3xl text-center font-bold">
        final mile delivery solutions
      </div>
      <div
        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        className="grid py-10 gap-20 text-center px-20"
      >
        <div className="flex justify-center flex-col items-center">
          <Image
            src={"/images/1 All in one.png"}
            height={50}
            width={50}
            alt=""
          />
          <div className="text-2xl mb-2 font-bold mt-6">Real-time tracking</div>
          <div className="">
            By adopting real-time delivery tracking software, final mile
            delivery management has become
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Image
            src={"/images/2 All in one.png"}
            height={70}
            width={70}
            alt=""
          />
          <div className="text-2xl mb-2 font-bold mt-6"> Proof of Delivery</div>
          <div className="">
            The system works with the electronic and digital signatures of the
            recipient on receiving the delivery item.
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Image
            src={"/images/3 All in one.png"}
            height={70}
            width={70}
            alt=""
          />
          <div className="text-2xl mb-2 font-bold mt-6">Real-time tracking</div>
          <div className="">
            By adopting real-time delivery tracking software, final mile
            delivery management has become
          </div>
        </div>
      </div>
    </div>
  );
}
