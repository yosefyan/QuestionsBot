import React from "react";
import CircleData from "../decorationComponents/CircleData";
import IconComponent from "../IconComponent";
import home from "../../constants/home";
import * as iconsData from "../../constants/iconsData";
import { centerItem, titleStyles } from "../../utils/utils";
import { bgColorsData, textColorsData } from "../../constants/colorsData";

const HowDoesItWork = () => {
  const { icons, titles } = home.circles;
  return (
    <div
      className={`w-[30%] h-full relative ${centerItem()} flex-col gap-4`}
    >
      <h1 className={`${titleStyles("text-3xl")} tShadow_PRIMARY p-2 text-white/50`}>
        איך זה עובד?
      </h1>
      {titles.map((title, i) => {
        return (
          <React.Fragment key={`homeCircle${i}`}>
            <CircleData i={i}>
              <IconComponent
                classes={`text-5xl h-1/2 ${centerItem()} ${
                  textColorsData[i % 2 === 0 ? "PRIMARY" : "SECONDARY"]
                }`}
                Icon={iconsData[icons[i]]}
              />
              <div className={`h-[50%] bg-gray-500/20 w-full`}>
                <h1
                  className={`${titleStyles(
                    "text-4xl"
                  )} tShadow_PRIMARY ${centerItem()} ${
                    textColorsData[i % 2 === 0 ? "PRIMARY" : "SECONDARY"]
                  }`}
                >
                  {title.split(" ")[0]}
                </h1>
                <h3
                  className={`${titleStyles(
                    "text-1xl"
                  )} text-white/70 tShadow_SECONDARY`}
                >
                  {title.split(" ").slice(1).join(" ")}
                </h3>
              </div>
            </CircleData>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HowDoesItWork;
