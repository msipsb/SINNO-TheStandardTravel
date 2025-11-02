import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact2() {
  return (
    <>
      <h1 className="font-bold">We'd love to hear from you</h1>
      <div>
        Need something cleared up? Here are our most frequently asked questions.
      </div>
      <br></br>
      <br></br>

      <div className="grid grid-cols-2 grid-rows-2">
        <div>
          <div className=" bg-black w-10 h-10 rounded-full flex justify-center items-center">
            <MdOutlineMailOutline color="white" />
          </div>
          <div>Email</div>
          <div> Our friendly team is here to help.</div>
        </div>

        <div>
          <div className=" bg-black w-10 h-10 rounded-full flex justify-center items-center">
            <MdOutlineLocalPhone color="white" />
          </div>
          <div>Phone</div>
          <div>Mon-Fri from 8am to 5pm.</div>
        </div>
      </div>

      <div className="font-bold text-blue-300">hi@agency</div>
      <div className="font-bold text-blue-300">+1 (555) 000-0000</div>
    </>
  );
}
