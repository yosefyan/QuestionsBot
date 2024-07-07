import React, { useEffect, useState } from "react";
import { centerItem, titleStyles } from "../utils/utils";
import home from "../constants/home";
import * as iconsData from "../constants/iconsData";
import IconComponent from "./IconComponent";
import { bgColorsData, textColorsData } from "../constants/colorsData";
import { NavLink } from "react-router-dom";

const NavBar = ({ routeData, data, shouldVertical, shouldAnimate = false }) => {
  const [shouldCloseEyes, setShouldCloseEyes] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldCloseEyes(true);
      setTimeout(() => {
        setShouldCloseEyes(falsfe);
      }, 2000);
    }, 25000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`${centerItem("")} ${
        shouldVertical
          ? `${toggleNav ? "w-[20%]" : "w-[10%]"} h-full sticky top-0 transition-all ${
              bgColorsData.PRIMARY
            }`
          : "w-[90%] h-[10%] rounded-full"
      }`}
    >
      <div className={`w-full h-full ${centerItem()} flex-col`}>
        {data.length > 0 &&
          data.map((nav, i) => (
            <NavLink className={`w-full h-full`} to={routeData[i]} key={`navLink${i}`}>
              {({ isActive }) => (
                <li
                  className={`cursor-pointer h-full ${
                    shouldCloseEyes && shouldAnimate ? "eyesClosingOpening" : ""
                  } ${centerItem()} ${
                    isActive ? "bg-green-500/20" : ""
                  } drop-shadow-[0_0_1rem_#ffffff8a] ${
                    shouldVertical
                      ? `w-full h-[24%] gap-4 flex-col ${
                          i !== data.length - 1
                            ? "border-b border-b-2 border-b-orange-500/20"
                            : ""
                        }`
                      : `w-full h-full rounded-full ${bgColorsData.SECONDARY}`
                  } ${
                    i % 2 === 0 ? "skew-y-6" : "-skew-y-6"
                  } hover:bg-gray-500/20 transition-all p-3 text-4xl text-white/40`}
                  key={`navBar${i}`}
                >
                  <IconComponent
                    classes={`${
                      textColorsData[i % 2 === 0 ? "PRIMARY" : "SECONDARY"]
                    }`}
                    Icon={iconsData[nav]}
                  />
                  {toggleNav && (
                    <p className={`w-full ${titleStyles("text-[1rem]")}`}>
                      {home.navBar.restTitles[i]}
                    </p>
                  )}
                </li>
              )}
            </NavLink>
          ))}
      </div>
      {shouldVertical && (
        <div
          onClick={() => setToggleNav((prev) => !prev)}
          className={`w-[25%] h-full bg-blue-500/20 cursor-pointer hover:bg-blue-500/10 transition-all rounded-l-full ${centerItem()}`}
        >
          <IconComponent
            classes={`text-3xl text-white/70`}
            Icon={iconsData["MdKeyboardArrowLeft"]}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
