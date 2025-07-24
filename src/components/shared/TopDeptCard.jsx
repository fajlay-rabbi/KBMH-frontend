import Image from "next/image";
import React from "react";

const TopDeptCard = ({image,title,description}) => {
  return (
    <div className="w-full h-64 rounded-lg bg-text-gradient-orange-blue p-[1px] overflow-hidden">
      <div className="bg-white w-full h-full p-4 rounded-lg">
        <Image src={image} alt="Top Dept" className="w-24" />
        <h3 className="font-archivo text-lg font-semibold">{title}</h3>
        <p className="text-sm font-semibold mt-1 text-[#555555]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopDeptCard;
