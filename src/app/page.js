import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Interface from "@/components/Interface";
import Proof from "@/components/Proof";
import Solutions from "@/components/Solutions";
import Tracking from "@/components/Tracking";
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
      <FAQ />
      <Tracking />
      <Footer />
    </>
  );
}
