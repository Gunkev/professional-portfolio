import React from "react";

const Heading = ({title}) => {
  return (
    <div className="text-[#5651e5] text-[32px] font-medium flex items-center gap-4 py-16">
      <div className="bg-[#5651e5] h-[2px] w-[40px] translate-y-1"></div>
      {title}
      <div className="bg-[#5651e5] h-[2px] w-[40px] translate-y-1"></div>
    </div>
  );
};

export default Heading;
