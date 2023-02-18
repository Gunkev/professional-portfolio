import React from "react";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="skills">
      <Heading title="What I use" />
      <div className="py-10">
        <p className="text-gray-600 mt-2 mb-2 text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">React.Js</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[90%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">NextJs</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[80%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">NodeJs</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[90%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">ExpressJs</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[85%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">HTML</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[100%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">CSS</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[100%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">MySQL</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[80%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">PostgreSQL</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[70%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">Bootstrap</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[90%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">JS</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[80%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">GraphQL</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[90%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">Tailwind CSS</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[90%] rounded-lg"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2 mb-2 text-[20px]">Foundation</p>
            <div className="relative bg-gray-400 h-[10px] mt-2 rounded-lg">
              <div className="bg-[#5651e5] absolute h-[10px] w-[70%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
