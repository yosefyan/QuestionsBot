import React from "react";
import { bgColorsData } from "../../constants/colorsData";
import { centerItem } from "../../utils/utils";

const CircleData = ({ children, i }) => {
  return (
    <>
      <div
        className={`w-[60%] h-[25%] transition-all shadow-[0_0rem_1rem_#ffffff29] slowe overflow-hidden ${centerItem(
          "justify-between"
        )} flex-col rounded-[50px] ${
          bgColorsData[i % 2 === 0 ? "PRIMARY" : "SECONDARY"]
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default CircleData;
