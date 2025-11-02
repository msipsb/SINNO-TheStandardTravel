import Link from "next/link";
import React from "react";
import Image from "next/image";

type NavigationItem = {
  href: string;
  name: string;
};

//Padding Margin
const NavigationItems: NavigationItem[] = [
  { href: "/home", name: "Home" },
  { href: "/packages", name: "Packages" },
  { href: "/help_center", name: "Help Center" },
  { href: "/contact", name: "Contact Us" },
];

function navbar() {
  return (
    <div className="w-fill h-[110px] items-center px-20 py-8 flex flex-row justify-between">
      <div className="flex flex-row gap-2 font-playfair-display italic underline font-semibold">
        <Image
          src={"/travelstandardlogo.png"}
          alt={"icon"}
          width={80}
          height={44}
        />
      </div>
      <div className="flex flex-row gap-10">
        {NavigationItems.map((item) => (
          <Link
            className="text-black hover:text-primary transition-color hover:scale-105 transition-all duration-500 font-alegreya-sans ease-in-out"
            key={"navitiem-${item.name}"}
            href={item.href}
          >
            {item.name}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default navbar;

/*function Example(){
  return(
    <div className="w-[60px] h-[60px] bg-amber-200">
      <div className="w-full h-full bg-red-500"></div>
    </div>
  )
}*/
