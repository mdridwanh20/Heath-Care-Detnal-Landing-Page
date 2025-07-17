import React from "react";
import Marquee from "react-fast-marquee";
import { IoMailOutline } from "react-icons/io5";

const Top_Navbar = () => {
  return (
    <nav className="bg-[var(--lightColor)] border-0 border-b border-[var(--borderColor)] z-30  py-3 fixed w-full top-0 ">
      <div className=" lg:flex container space-y-1 px-3 justify-between items-center text-[12px] m-auto  text-[var(--deepColor)]">
        <Marquee speed={20} className="font-semibold">

          
          <span className="mx-2"> Mon to Sat: 08:00 - 15:30</span>
          <span className="mx-4"> | </span>
          <span className="mx-2">Emergency (+01) - 234 567 890</span>


        </Marquee>
      </div>
    </nav>
  );
};

export default Top_Navbar;
