import React from "react";
import { centerItem, titleStyles } from "../utils/utils";
import { textColorsData } from "../constants/colorsData";

const TitleAnswer = ({ title, answer }) => {
  return (
    <div
      className={`w-[90%] m-auto ${centerItem("", "items-start")} p-4 flex-col`}
    >
      <h1
        className={`${titleStyles(
          "text-4xl"
        )} bg-gray-500/10 rounded-[20px] p-4 ${textColorsData.SECONDARY}`}
      >
        {title}
      </h1>
      <h3
        className={`${titleStyles(
          "text-1xl"
        )} border-b-8 border-b-gray-500/20 p-4 text-start ${
          textColorsData.PRIMARY
        }`}
      >
        {answer}
      </h3>
    </div>
  );
};

export default TitleAnswer;
