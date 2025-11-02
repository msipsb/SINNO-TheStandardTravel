import React from "react";

export default function Contact() {
  return (
    <>
      <div>Get in touch size</div>
      <div>We'd love to hear from you. Please fill out this form.</div>
      <br></br>
      <div className="grid grid-cols-2 grid-rows-2">
        <div>First Name</div>
        <div>Last Name</div>
        <input type="text" className="border bg-amber-50" />
        <input type="text" className="border bg-amber-50" />
      </div>

      <div>Email</div>
      <input type="text" className="border bg-amber-50" />
      <input type="text" />

      <div>Phone Number</div>
      <input type="text" className="border bg-amber-50" />
      <input type="text" />
      <br></br>

      <div>Message</div>
      <input type="text" className="border bg-amber-50" />
      <input type="text" />
    </>
  );
}
