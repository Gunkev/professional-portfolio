import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const About = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="about">
      <Heading title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <Image
            src="/aboutme.jpg"
            alt="about me image"
            height={700}
            width={600}
          />
        </div>
        <div>
          <div className="max-w-[800px]">
            <h2 className="font-bold  mb-10 text-[30px]">
              I am Kevine Nzapdi a Technical Writer
            </h2>
            <p className="text-gray-600 text-[20px] mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="text-gray-600 text-[20px] mb-5">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <button className="bg-[#5651e5] text-white py-2 px-10 rounded inline-block mt-10 font-medium border border-white hover:bg-transparent hover:text-white transition duration-200">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
