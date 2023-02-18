import React from "react";
import {CiSquareRemove} from "react-icons/ci";

const MobileNavbar = ({isOpen, toggleNavbar}) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 r-[30px] mt-[10px] p-5 text-[24px] hover:cursor-pointer"
        onClick={toggleNavbar}
      >
        <CiSquareRemove className="text-[44px]" />
      </div>
      <div className="flex flex-col gap-4 text-[20px]">
        <a href="#hero" onClick={toggleNavbar} className="hover:text-[#5651e5]">
          Home
        </a>
        <a href="#hero" onClick={toggleNavbar} className="hover:text-[#5651e5]">
          About
        </a>
        <a href="#hero" onClick={toggleNavbar} className="hover:text-[#5651e5]">
          Services
        </a>
        <a href="#hero" onClick={toggleNavbar} className="hover:text-[#5651e5]">
          Projects
        </a>
        <a href="#hero" onClick={toggleNavbar} className="hover:text-[#5651e5]">
          Blog
        </a>
        <a href="#hero" onClick={toggleNavbar} className="hover:text-[#5651e5]">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
