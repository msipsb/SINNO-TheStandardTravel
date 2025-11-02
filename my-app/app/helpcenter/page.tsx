import React from "react";
import heading from "@/component/bghead";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";

function page() {
  return (
    <div>
      <div className="relative flex h-[300] w-full">
        <Image
          src={"/pic/helpcenterBG.png"}
          alt={"icon"}
          fill
          className="object-cover z-0"
          priority
        ></Image>
        <div
          className="font-alegreyasna font-bold flex flex-row z-10 mt-3.5 ml-20"
          style={{ fontSize: "96px", color: "#223843" }}
        >
          {" "}
          Help Center{" "}
        </div>
      </div>
      <div
        className="font-alegreyasna font-bold flex flex-col items-center w-full mt-5"
        style={{ fontSize: "70px", color: "black" }}
      >
        How can we help?
        <div className="flex h-[80px] bg-[#223843] m-10 rounded-4xl p-0">
          <div className="h-full flex items-center px-3">
            <div className="w-full h-[88px] px-10 py-8 text-[15px] flex flex-row justify-between gap-5 text-amber-50 ">
              <div className="w-2xl h-[20px]  text-[15px] flex items-center gap-4 text-amber-50 ">
                <CiSearch />
                <div>How can we help you?</div>
              </div>
              <CiMicrophoneOn />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-4xl my-10">
          <div className="grow border-t-2 border-[#223843]"></div>
          <span className="mx-6 text-[#223843] text-3xl font-bold">
            Topic for Traveler
          </span>
          <div className="grow border-t-2 border-[#223843]"></div>
        </div>
      </div>
      <div className=" flex flex-row mt-16 justify-center gap-8 w-full  z-20">
        <div className="flex h-50 w-80 bg-[#223843] mx-20 rounded-4xl p-20">
          {" "}
        </div>
        <div className="flex h-50 w-80 bg-[#223843] mx-20 rounded-4xl p-20">
          {/* <div className="flex flex-row mt-16 justify-between w-full gap-8 z-20">
        <div className="rounded-2xl bg-my_light_gray fill-my_light_gray w-96 h-72 text-black">
          fgf
        </div>
        <div className="rounded-2xl bg-my_light_gray fill-my_light_gray w-96 h-72"></div> */}
        </div>
      </div>
    </div>
  );
}

export default page;
