import React from "react";
import { centerItem } from "../../utils/utils";
import { bgColorsData, textColorsData } from "../../constants/colorsData";
import * as iconsData from "../../constants/iconsData";
import IconComponent from "../IconComponent";

const Message = ({ message, isBot }) => {
  const shouldReverse = [
    <p
      className={`w-[90%] flex-col p-4 rounded-[20px] text-white/60 ${
        isBot
          ? `rounded-tl-[5px] text-end ${bgColorsData.SECONDARY}`
          : `rounded-tr-[5px] text-start ${bgColorsData.PRIMARY}`
      }`}
    >
      <span>{message}</span>
    </p>,
    <IconComponent
      classes={`${
        textColorsData[isBot ? "SECONDARY" : "PRIMARY"]
      } tShadow_PRIMARY drop-shadow-[0_0_1rem_black] text-4xl`}
      Icon={iconsData[isBot ? "RiRobot3Line" : "FaUserShield"]}
    />,
  ];

  return (
    <div
      className={`w-[90%] m-4 px-4 ${centerItem(
        "justify-between",
        "items-start"
      )} gap-2`}
    >
      {message ? (!isBot ? shouldReverse.reverse() : shouldReverse) : ""}
    </div>
  );
};

export default Message;
