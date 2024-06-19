import React from "react";
import {
  bgColorsData,
  gradientColorsData,
  textColorsData,
} from "../../constants/colorsData";
import { centerItem, gradient } from "../../utils/utils";
import IconComponent from "../IconComponent";
import * as iconsData from "../../constants/iconsData";

const GPTsAnswers = ({ categoriesIndex }) => {
  return (
    <div
      className={`w-[80%] h-full p-4 overflow-y-scroll rounded-r-lg drop-shadow-[0_0_1rem_gray] ${gradient(
        false,
        gradientColorsData.PRIMARY
      )} rounded-[20px]`}
    >
      <div
        className={`w-[90%] m-4 px-4 ${centerItem(
          "justify-between",
          "items-start"
        )} gap-2`}
      >
        <IconComponent
          classes={`${textColorsData.SECONDARY} drop-shadow-[0_0_1rem_black] text-4xl`}
          Icon={iconsData["FaUserShield"]}
        />
        <p
          className={`w-[90%] ${centerItem(
            "",
            "items-start"
          )} flex-col p-4 rounded-[20px] text-white/60 rounded-tr-[5px] bg-gray-500/30`}
        >
          {categoriesIndex?.questions.map((chosenQuestion, i) => {
            return (
              <span key={`chosenQuestionForGPT${i}`}>{chosenQuestion} </span>
            );
          })}
        </p>
      </div>
      <div
        className={`w-[90%] m-4 px-4 ${centerItem("justify-between", "items-start")} gap-2`}
      >
        <p
          className={`w-[90%] ${centerItem(
            "",
            "items-end"
          )} text-end flex-col p-4 rounded-[20px] text-white/60 rounded-tl-[5px] bg-black/60`}
        >
          <span>
          סתם טקט רנדומלי שאני ממציא ממש עעכשיו
          </span>
        </p>
        <IconComponent
          classes={`${textColorsData.PRIMARY} drop-shadow-[0_0_1rem_black] text-4xl`}
          Icon={iconsData["RiRobot3Line"]}
        />
      </div>
    </div>
  );
};

export default GPTsAnswers;
