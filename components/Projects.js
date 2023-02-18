import React from "react";
import Heading from "./Heading";

const Projects = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="projects">
      <Heading title="What I built" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="row-span-2 relative group">
          <img src="/assets/mobil.jpg" alt="creative work 1" />
          <div className="bg-[#000000bd] absolute text-center w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            <h1 className="font-bold text-[20px]">Kuisin Blog</h1>
            <p className="px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <button className="bg-transparent text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-[#5651e5] hover:bg-white transition duration-200">
              Learn more
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img src="/assets/port.jpg" alt="creative work 1" />
          <div className="bg-[#000000bd] absolute text-center w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            <h1 className="font-bold text-[20px]">Translator</h1>
            <p className="px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <button className="bg-transparent text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-[#5651e5] hover:bg-white transition duration-200">
              Learn more
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img src="/assets/text.jpg" alt="creative work 1" />
          <div className="bg-[#000000bd] absolute text-center w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            <h1 className="font-bold text-[20px]">Text Generator</h1>
            <p className="px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <button className="bg-transparent text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-[#5651e5] hover:bg-white transition duration-200">
              Learn more
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img src="/assets/text.jpg" alt="creative work 1" />
          <div className="bg-[#000000bd] absolute text-center w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            <h1 className="font-bold text-[20px]">TheHost E-commerce</h1>
            <p className="px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <button className="bg-transparent text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-[#5651e5] hover:bg-white transition duration-200">
              Learn more
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img src="/assets/port.jpg" alt="creative work 1" />
          <div className="bg-[#000000bd] absolute text-center w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            <h1 className="font-bold text-[20px]">Portfolio Website</h1>
            <p className="px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <button className="bg-transparent text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-[#5651e5] hover:bg-white transition duration-200">
              Learn more
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group rounded">
          <img src="/assets/mobil.jpg" alt="creative work 1 rounded" />
          <div className="bg-[#000000bd] absolute text-center rounded w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
            <h1 className="font-bold text-[20px]">Mobile Game</h1>
            <p className="px-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <button className="bg-transparent text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-[#5651e5] hover:bg-white transition duration-200">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
