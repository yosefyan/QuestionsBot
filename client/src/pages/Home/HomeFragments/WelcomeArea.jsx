import React from "react";
import BotFace from "../../../assets/botFace.gif";
import { centerItem, titleStyles, triangleStyles } from "../../../utils/utils";
import home from "../../../constants/home";
import GlowingText from "../../../components/GlowingText";
import GlitchedText from "../../../components/GlitchedText";
import tikshuv from "../../../assets/tikshuv.svg";
import zroaaYabasha from "../../../assets/zroaaYabasha.svg";

const WelcomeArea = () => {
  return (
    <div className={`w-[60%] h-full ${centerItem("")} relative flex-col`}>
      <div
        className={`w-full  bg-stars-pattern bg-[length:100%_100%] opacity-40 h-full absolute`}
      ></div>
      <div
        className={`w-[45%] h-full absolute ${centerItem("justify-between")}`}
      >
        {[tikshuv, zroaaYabasha].map((icon, i) => {
          return (
            <img
              className={`w-[8rem] ${centerItem()} rounded-[50px] border-b-[8rem] border-white/35 border-dashed p-4 absolute opacity-35 blur-[.1rem] top-[20%] drop-shadow-[0_0_.7rem_rgb(205_50_25)] ${
                i === 0 ? "left-[-12%] upDown" : "right-[-15%] downUp"
              }`}
              src={icon}
              alt="unit icon"
            />
          );
        })}
      </div>
      <div
        className={`absolute border-l-[20rem] border-r-[20rem] animate-pulse blur-[.5rem] ${triangleStyles(
          true,
          "border-b-[80vh]"
        )}`}
      ></div>
      <img
        className={`h-[50%] z-20 rounded-full opacity-20`}
        src={BotFace}
        alt="Bot Face"
      />
      <div className={`w-[60%] h-[40%] ${centerItem("")} gap-4 flex-col`}>
        {Object.entries(home.titles).map(([Key, value], i) => {
          const titleSize = Key === "h1" ? "text-8xl" : "text-2xl";
          return (
            <React.Fragment key={`homeConstants${i}`}>
              <Key
                className={`text-white opacity-70 ${
                  Key === "h3" ? "tShadow_PRIMARY" : "tShadow_SECONDARY"
                } ${titleStyles(titleSize)}`}
              >
                {Key === "h1" ? (
                  <GlitchedText>
                    <GlowingText text={value} />
                  </GlitchedText>
                ) : (
                  value
                )}
              </Key>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomeArea;
