import React from "react";
import TypeWriter from "typewriter-effect";

import Image from "next/image";
import {FaLinkedinIn, FaDev, FaGithub, FaMediumM} from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="bg-[('/background.jpg')] h-screen bg-cover bg-center bg-[#5651e5] bg-fixed flex items-center"
      id="hero"
    >
      <div className="container mx-auto mt-5 px-4">
        <div className="max-w-[1240px] text-white flex flex-column gap-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center place-items-center">
            <div>
              <h1 className="text-5xl w-[100%]">Hi, I am Lolita Gold</h1>
              <h2 className="text-2xl mt-3">
                <TypeWriter
                  options={{
                    strings: [
                      "A Frontend Developer",
                      "A Backend Developer",
                      "A Fullstack Developer",
                      "An SEO Technical Writer",
                      "An SEO Analyst",
                    ],
                    changeDelay: 3,
                    changeDeletedSpeed: 2,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <div className="mt-5">
                <h3 className="text-[20px]">
                  I am a developing developer. I would love to help you with
                  your next big project. Contact me for all kinds of
                  collaborations
                </h3>
              </div>
              <div className="flex my-10 ">
                <div className="rounded-full shadow-lg p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn className="text-white" />
                </div>
                <div className="rounded-full shadow-lg  p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaGithub className="text-white" />
                </div>
                <div className="rounded-full shadow-lg  p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaDev className="text-white" />
                </div>
                <div className="rounded-full shadow-lg  p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaMediumM className="text-white" />
                </div>
                <div className="rounded-full shadow-lg  p-3 mr-5 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn className="text-white" />
                </div>
              </div>
            </div>
            <div>
              <Image src="/assets/avatarg.png" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
