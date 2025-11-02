import Image from "next/image";
import Navbar from "../../component/public/navbar";
import Contact from "../../component/public/Contact";
import Contact2 from "../../component/public/Contact2";

export default function Home() {
  return (
    <div className="bg-white text-black font-alegreya-sans">
      <div>
        <Navbar />
        <div className="bg-red-200 grid grid-cols-2 w-full">
          <div className="bg-gray-100">
            <Contact />
          </div>

          <div className="bg-gray-100">
            <Contact2 />
          </div>
        </div>
      </div>
    </div>
  );
}
