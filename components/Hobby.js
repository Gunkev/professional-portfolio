import React from "react";
import Heading from "./Heading";
import {
  FaBed,
  FaGamepad,
  FaReadme,
  FaPencilAlt,
  FaRunning,
  FaTv,
  FaMusic,
} from "react-icons/fa";

const Hobby = () => {
  return (
    <section className="container mx-auto py-12 px-4" id="hobby">
      <Heading title="What I also Like" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 py-40">
        <div className="py-10">
          <FaBed size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">Sleeping</p>
        </div>
        <div className="py-10">
          <FaGamepad size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">Gaming</p>
        </div>
        <div className="py-10">
          <FaReadme size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">Reading</p>
        </div>
        <div className="py-10">
          <FaPencilAlt size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">Writing</p>
        </div>
        <div className="py-10">
          <FaRunning size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">Fitness</p>
        </div>
        <div className="py-10">
          <FaTv size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">TV/Movies</p>
        </div>
        <div className="py-10">
          <FaMusic size={50} />
          <p className="text-gray-600 mt-2 mb-2 text-[20px]">Music</p>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
