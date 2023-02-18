import React from "react";
import Heading from "./Heading";

const Works = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="work">
      <Heading title="My Blogs" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="row-span-2 relative group">
          <img src="/assets/blog.jpg" alt="devblog" className="rounded-xl" />
          <div className="transition duration-500 grid text-left pb-10">
            <h1 className="text-black text-[30px] font-bold"> The Devblog</h1>
            <p className="text-gray-600 py-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
            <button className="uppercase border-2 px-5 py-2 border-gray-600 hover:bg-[#5651e5] transition-all duration-300 hover:border-collapse hover:text-white hover:border-white">
              Visit
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img
            src="/assets/seo.jpg"
            alt="creative work 1"
            className="rounded-xl"
          />
          <div className="transition duration-500 grid text-left pb-10">
            <h1 className="text-black text-[30px] font-bold">SEO Blog</h1>
            <p className="text-gray-600 py-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
            <button className="uppercase border-2 px-5 py-2 border-gray-600 hover:bg-[#5651e5] transition-all duration-300 hover:border-collapse hover:text-white hover:border-white">
              Visit
            </button>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img src="/assets/blog.jpg" alt="blog" className="rounded-xl" />
          <div className="transition duration-500 grid text-left pb-10">
            <h1 className="text-black text-[30px] font-bold">
              Everything blog
            </h1>
            <p className="text-gray-600 py-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
            <button className="uppercase border-2 px-5 py-2 border-gray-600 hover:bg-[#5651e5] transition-all duration-300 hover:border-collapse hover:text-white hover:border-white">
              Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
