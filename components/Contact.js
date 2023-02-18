import React from "react";
import Heading from "./Heading";
import {FaLinkedinIn, FaDev, FaGithub, FaMediumM} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="contact">
      <Heading title="Connect with me" />
      <div className="py-20">
        <p className="text-gray-600 mt-2 mb-2 text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          <div className="flex my-10 ">
            <div className="rounded-full shadow-lg border-2 border-gray-700 p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaLinkedinIn className="text-gray-700" />
            </div>
            <div className="rounded-full shadow-lg border-2 border-gray-700 p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaGithub className="text-gray-700" />
            </div>
            <div className="rounded-full shadow-lg border-2 border-gray-700 p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaDev className="text-gray-700" />
            </div>
            <div className="rounded-full shadow-lg border-2 border-gray-700 p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaMediumM className="text-gray-700" />
            </div>
            <div className="rounded-full shadow-lg border-2 border-gray-700 p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaLinkedinIn className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
