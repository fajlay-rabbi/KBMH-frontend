"use client";

import React from "react";
import ComSlider from "../shared/ComSlider";
import { videoComponents } from "@/utils/data/data";

const TopServices = () => {
  return (
    <section className="mb-16">
      <div className="container-custom mx-auto">
        <p className="font-archivo text-gradient text-xl font-bold pb-5 text-center">
          Top Services
        </p>
      </div>
      <div className="pl-4 space-y-5">
        <ComSlider 
          components={videoComponents}
          width="150px"
        />
        <ComSlider 
          components={videoComponents}
          width="150px"
        />
      </div>
    </section>
  );
};

export default TopServices;
