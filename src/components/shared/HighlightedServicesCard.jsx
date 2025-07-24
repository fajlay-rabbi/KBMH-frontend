import Image from "next/image";
import React from "react";

const HighlightedServicesCard = ({image,title}) => {
  return (
    <div className="w-full h-20 rounded-lg bg-text-gradient-orange-blue p-[1px] overflow-hidden">
      <div className="bg-white flex flex-row items-center justify-center gap-4 w-full h-full p-4 rounded-lg">
        <Image src={image} alt="Top Dept" className="w-12" />
        <p className="font-archivo text-sm font-medium">{title}</p>
      </div>
    </div>
  );
};

export default HighlightedServicesCard;
