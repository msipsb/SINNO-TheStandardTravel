import Image from "next/image";
import Banner from "@/components/Banner";
import Highlight from "@/components/Highlight";
import Place from "@/components/Place";
import Details from "@/components/Details";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <Highlight></Highlight>
      <Place></Place>
      <Details></Details>
    </div>
  );
}
