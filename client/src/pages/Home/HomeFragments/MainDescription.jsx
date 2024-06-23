import React from "react";
import { centerItem, titleStyles } from "../../../utils/utils";
import { textColorsData } from "../../../constants/colorsData";
import FadingEffect from "../../../components/effectsComponents/FadingEffect";
import home from "../../../constants/home";
import LoopingTypedText from "../../../components/effectsComponents/TyperEffect";
import IconComponent from "../../../components/IconComponent";
import * as iconsData from "../../../constants/iconsData";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";

const MainDescription = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-[40%] h-[80%] text-white/70 ${centerItem(
        "justify-evenly"
      )} flex-col gap-4`}
    >
      <NavBar
        routeData={home.navigateRoutes.home}
        data={home.navBar}
        shouldVertical={false}
        shouldAnimate
      />
      <FadingEffect side={`translateY`} distance={`-5vh`}>
        <h1
          className={`${titleStyles(
            "text-5xl xl:text-7xl"
          )} py-4 text-white/40 text-start animate-pulse`}
        >
          מנו"רובוט
        </h1>
      </FadingEffect>
      <FadingEffect
        color={textColorsData.SECONDARY}
        side={`translateX`}
        distance={`5vh`}
      >
        <h2
          className={`${titleStyles("text-4xl")} bg-gray-500/20 py-4 text-start ${
            textColorsData.PRIMARY
          }`}
        >
          היכולת לדעת,
        </h2>
        <LoopingTypedText
          typeSpeed={200}
          backSpeed={100}
          strings={[
            "היכולת לחקור.",
            "היכולת ללמוד.",
            "היכולת להתייעל.",
            "היכולת לעזור. ",
          ]}
        />
      </FadingEffect>
      <div className={`w-[70%] h-[30%] ${centerItem("justify-between")} gap-4`}>
        {home.genericButtons.titles.map((button, i) => {
          return (
            <button
              onClick={() => navigate(i === 0 ? "/question" : "/file")}
              className={`w-[45%] h-[70%] ${centerItem()} flex-col gap-4 p-4 rounded-[20px] hover:scale-95 transition-all ${titleStyles(
                "text-[1.2rem]"
              )} shadow-lg shadow-white/35 hover:bg-gray-500/20 hover:shadow-white/0 transiton-all`}
            >
              <IconComponent
                classes={`text-4xl ${
                  textColorsData[i === 0 ? "PRIMARY" : "SECONDARY"]
                }`}
                Icon={iconsData[home.genericButtons.icons[i]]}
              />{" "}
              {button}
            </button>
          );
        })}
      </div>
      {/* </FadingEffect> */}
    </div>
  );
};

export default MainDescription;
