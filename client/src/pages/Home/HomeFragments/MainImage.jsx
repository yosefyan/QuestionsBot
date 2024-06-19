import React from "react";
import BotFace from "../../../assets/botFace.gif";
import { centerItem } from "../../../utils/utils";
import tikshuv from "../../../assets/tikshuv.svg";
import zroaaYabasha from "../../../assets/zroaaYabasha.svg";

const MainImage = () => {
  return (
    <div className={`w-[60%] h-full ${centerItem("")} relative flex-col`}>
      <div
        className={`w-[70%] h-full absolute opacity-10 shadow-gray-500/20 bg-binary-pattern bg-[length:100%_100%]`}
      ></div>
      <div
        className={`w-[45%] h-full absolute ${centerItem("justify-between")}`}
      >
        {[tikshuv, zroaaYabasha].map((icon, i) => {
          return (
            <img
              className={`w-[8rem] ${centerItem()} rounded-[50px] border-b-[8rem] border-white/35 border-dashed p-4 absolute opacity-35 blur-[.1rem] top-[20%] drop-shadow-[0_0_.7rem_rgb(205_50_25)] ${
                i === 0
                  ? "left-[-12%] upDown top-[40%]"
                  : "top-[40%] right-[-15%] downUp"
              }`}
              src={icon}
              alt="unit icon"
            />
          );
        })}
      </div>
      <img
        className={`h-[50%] z-20 rounded-full opacity-20`}
        src={BotFace}
        alt="Bot Face"
      />
    </div>
  );
};

export default MainImage;
