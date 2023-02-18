import React from "react";
import Link from "next/link";
import {CiImport, CiGrid41} from "react-icons/ci";

const Navbar = ({toggleNavbar}) => {
  return (
    <div className="bg-[#5651e5] shadow-md fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[24px] text-white">Portfolio</div>

        <div className="hidden md:flex gap-6">
          <Link href="/#hero" legacyBehavior>
            <a className="hover:text-[#ddd] text-white">Home</a>
          </Link>
          <Link href="/#about" legacyBehavior>
            <a className="hover:text-[#ddd] text-white">About</a>
          </Link>
          <Link href="/#services" legacyBehavior>
            <a className="hover:text-[#ddd] text-white">Services</a>
          </Link>
          <Link href="/#projects" legacyBehavior>
            <a className="hover:text-[#ddd] text-white">Projects</a>
          </Link>
          <Link href="/#work" legacyBehavior>
            <a className="hover:text-[#ddd] text-white">Blog</a>
          </Link>
          <Link href="/#contact" legacyBehavior>
            <a className="hover:text-[#ddd] text-white">Contact</a>
          </Link>
        </div>
        <a
          href=""
          className="hidden md:flex border border-white px-4 py-1 text-[#5651e5] rounded-[5px] items-center gap-2 bg-white hover:bg-[#ff4d41] hover:text-white transition duration-200"
        >
          <CiImport />
          Download CV
        </a>
        <div className="md:hidden text-[24px] ">
          <CiGrid41 className="text-white" onClick={toggleNavbar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
