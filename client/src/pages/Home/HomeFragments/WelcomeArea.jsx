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
    <div className={`w-[60%] h-full ${centerItem()} relative flex-col`}>
      <div className={`w-[50%] h-[30%] absolute`}>
        {[tikshuv, zroaaYabasha].map((icon, i) => {
          return <img className={`w-[20%]`} src={icon} alt="unit icon" />;
        })}
      </div>
      <div
        className={`absolute border-l-[20rem] border-r-[20rem] animate-pulse ${triangleStyles(
          true,
          "border-b-[80vh]"
        )}`}
      ></div>
      <img
        className={`h-[50%] animate-pulse opacity-20`}
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
