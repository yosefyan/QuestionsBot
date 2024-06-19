import React, { useEffect, useState } from "react";
import { centerItem } from "../utils/utils";
import home from "../constants/home";
import * as iconsData from "../constants/iconsData";
import IconComponent from "./IconComponent";
import { bgColorsData } from "../constants/colorsData";
import BlinkingEye from "./effectsComponents/BlinkingEffect";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [shouldCloseEyes, setShouldCloseEyes] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldCloseEyes(true);
      setTimeout(() => {
        setShouldCloseEyes(false);
      }, 2000);
    }, 25000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ul
      className={`w-[70%] h-[10%] ${centerItem(
        "justify-evenly"
      )} gap-4 rounded-full`}
    >
      {home.navBar.map((nav, i) => {
        return (
          <li
            onClick={() => navigate(i === 0 && "/faq")}
            className={`cursor-pointer w-full ${
              shouldCloseEyes ? "eyesClosingOpening" : ""
            }  ${centerItem()} drop-shadow-[0_0_1rem_#ffffff8a] h-full ${
              i === 0 ? "skew-y-6" : "-skew-y-6"
            } rounded-full ${
              bgColorsData.SECONDARY
            } hover:bg-gray-500/20 transition-all p-3 text-4xl text-white/40`}
            key={`navBar${i}`}
          >
            <IconComponent Icon={iconsData[nav]} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
