import React, { useState } from "react";
import { centerItem, titleStyles } from "../utils/utils";
import { bgColorsData, textColorsData } from "../constants/colorsData";
import IconComponent from "./IconComponent";
import * as iconsData from "../constants/iconsData";
import file from "../constants/file";

const TitleButtons = ({
  handleNeedGenerated,
  title,
  buttons,
  needGenerated,
  icon,
  subText,
  shouldInput = false,
  shouldEdit = false,
}) => {
  const handleButtons = (buttonName, subject, i) => {
    handleNeedGenerated(buttonName, subject, i);
  };
  const [inpValue, setInpValue] = useState("");
  return (
    <div
      className={`w-full h-fit ${centerItem(
        "justify-start",
        "items-start"
      )} flex-col`}
    >
      <div className={`w-full h-full text-start p-4 bg-gray-500/10 my-4 `}>
        <h1
          className={`${titleStyles("text-3xl")} ${centerItem()} gap-4 ${
            textColorsData.SECONDARY
          }`}
        >
          <IconComponent Icon={iconsData[icon]} />
          {title}
        </h1>
        <h3 className={`text-white/50 ${titleStyles("text-1xl")}`}>
          {subText}
        </h3>
      </div>
      <div
        className={`${centerItem("", "items-start")} w-full ${
          shouldEdit ? "grid-cols-1 justify-items-center" : ""
        } ${
          shouldInput ? `${centerItem()} flex-col` : "grid grid-cols-3"
        } p-4 gap-4`}
      >
        {shouldInput ? (
          <>
            <input
              required
              placeholder="כתבו כאן את שאלתכם..."
              className={`w-full focus:outline-none ${textColorsData.SECONDARY} bg-transparent border-b border-b-8 border-b-blue-500/35`}
              value={inpValue}
              onChange={({ target }) => setInpValue(target.value)}
              type="text"
            />
            <button
              onClick={() => handleButtons(inpValue, "כתיבת שאלה", null)}
              className={`w-full p-4 rounded-[20px] text-white/40 hover:scale-95 transition-all ${titleStyles(
                "text-2xl"
              )} ${
                inpValue.length > 0
                  ? "bg-green-500/40"
                  : "pointer-events-none bg-gray-500/50"
              }`}
            >
              שלחו הודעה
            </button>
          </>
        ) : (
          <>
            {shouldEdit && (
              <>
              <p className={`w-[70%] text-white/50`}>סה"כ קבצים: </p>
              <button
                className={`${centerItem()} gap-4 w-[70%] p-4 rounded-[20px] bg-green-500/50 text-white/40 hover:scale-95 transition-all ${titleStyles(
                  "text-2xl"
                )}`}
              >
                הוסיפו קובץ
                <IconComponent Icon={iconsData["IoIosAddCircle"]} />
              </button>
              </>
            )}
            {buttons.map((button, i) => {
              return (
                <React.Fragment key={`buttonsSelectorComp${i}`}>
                  <button
                    onClick={() => handleButtons(button, title, i)}
                    className={`${centerItem()} gap-4 ${titleStyles(
                      "text-1xl"
                    )} ${
                      needGenerated.supportKind === button
                        ? "bg-green-500/35 pointer-events-none"
                        : ""
                    } p-4 ${
                      shouldEdit
                        ? "flex-1 w-[70%] cursor-default"
                        : "hover:scale-95"
                    } h-full transition-all text-white/50 rounded-[20px] ${
                      bgColorsData[i % 2 === 0 ? "PRIMARY" : "SECONDARY"]
                    }`}
                  >
                    {shouldEdit && (
                      <IconComponent
                        classes={`cursor-pointer hover:bg-gray-500/50 rounded-full`}
                        Icon={iconsData["FaFileAlt"]}
                      />
                    )}
                    <span className={`flex-1 text-start`}>{button}</span>
                    {shouldEdit && (
                      <IconComponent
                        classes={`hover:bg-gray-500/20 text-2xl text-red-500/50 transition-all p-2 cursor-pointer rounded-full`}
                        Icon={iconsData["MdDelete"]}
                      />
                    )}
                  </button>
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default TitleButtons;
