import Brands from "@/components/Brands";
import Interface from "@/components/Interface";
import Proof from "@/components/Proof";
import Solutions from "@/components/Solutions";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Brands />
      <Solutions />
      <Interface />
      <Proof />
    </>
  );
}
