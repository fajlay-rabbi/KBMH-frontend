import React from "react";
import AutoSliderRow from "../shared/AutoSliderRow";
import {
  weServedRow1,
  weServedRow2,
  weServedRow3,
  weServedRow4,
  weServedRow5,
  weServedRow6,
  weServedRow7,
} from "@/utils/data/data";

const WeServed = () => {
  return (
    <section>
      <div className="container-custom mx-auto">
        <p className="font-archivo text-gradient text-xl font-bold pb-5">
          100+ Doctor&apos;s
        </p>
      </div>
      <div className="w-full pl-4 space-y-5">
        <AutoSliderRow images={weServedRow1} />
        <AutoSliderRow images={weServedRow2} reverse />
        <AutoSliderRow images={weServedRow3} />
        <AutoSliderRow images={weServedRow4} reverse />
        <AutoSliderRow images={weServedRow5} />
        <AutoSliderRow images={weServedRow6} reverse />
        <AutoSliderRow images={weServedRow7} />
      </div>
      <div className="bg-muted w-fit mx-auto my-12 py-2 px-4 text-white text-center rounded-lg">
        <p className="font-archivo">Visit more in Website</p>
      </div>
    </section>
  );
};

export default WeServed;
