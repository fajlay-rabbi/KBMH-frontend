"use client";

import React from "react";
import ComSlider from "../shared/ComSlider";
import { topDepartmentRow1, topDepartmentRow2 } from "@/utils/data/data";

const TopDepartment = () => {
  return (
    <section className="mb-16">
      <div className="container-custom mx-auto">
        <p className="font-archivo text-gradient text-xl font-bold pb-1 text-left">
          Top Departments
        </p>
        <p className="text-[#555555] text-sm font-medium font-archivo mb-8">
          Our top departments deliver expert, specialized care in cardiology,
          orthopedics, neurology, pediatrics, and more.
        </p>
      </div>
      <div className="pl-4 space-y-3">
        <ComSlider components={topDepartmentRow1} width="250px" />
        <ComSlider
          components={topDepartmentRow2}
          width="250px"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default TopDepartment;
