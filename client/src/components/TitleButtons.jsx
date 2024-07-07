import React, { useState } from "react";
import { centerItem, titleStyles } from "../utils/utils";
import {
  bgColorsData,
  greenButton,
  inputStyle,
  textColorsData,
} from "../constants/colorsData";
import IconComponent from "./IconComponent";
import * as iconsData from "../constants/iconsData";
import { ReactTyped } from "react-typed";
import FileUpload from "./FileUpload";
import axios from "axios";
import toastifyHelper from "../helpers/toastifyHelper";

const TitleButtons = ({
  handleTriggerFiles,
  handleFileName,
  handleNeedGenerated,
  title,
  buttons,
  needGenerated,
  icon,
  handleExtendedPart,
  subText,
  shouldAdd = false,
  shouldInput = false,
  shouldEdit = false,
}) => {
  const [inpValue, setInpValue] = useState("");

  const handleClickedButton = () => {
    handleExtendedPart(true);
  };

  const handleIconDelete = (fileName) => {
    handleFileName(fileName);
    toastifyHelper({ status: 200, message: `הקובץ ${fileName} נמחק בהצלחה!` });
  };
  const handleButtons = async (buttonName, subject, i) => {
    try {
      if (!shouldEdit) {
        handleNeedGenerated(buttonName, subject, i);
        await axios.post("http://localhost:5174/question", {
          question: inpValue,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`w-full relative h-fit ${centerItem(
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
        className={`${centerItem()} w-full ${!shouldEdit ? "" : "flex-col"} ${
          shouldInput
            ? `${centerItem()} flex-col`
            : shouldEdit
            ? ""
            : "grid grid-cols-2"
        } p-4 gap-4`}
        f
      >
        {shouldInput ? (
          <>
            <textarea
              required
              placeholder="כתבו כאן את שאלתכם..."
              className={inputStyle}
              value={inpValue}
              onChange={({ target }) => setInpValue(target.value)}
              type="text"
            />
            <button
              onClick={() => handleButtons(inpValue, "כתיבת שאלה", null)}
              className={`${greenButton} ${
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
            {shouldAdd && (
              <button
                onClick={() => handleClickedButton()}
                className={`${greenButton} bg-green-500/30`}
              >
                הוספה
              </button>
            )}
            {shouldEdit && (
              <>
                <FileUpload handleTriggerFiles={handleTriggerFiles} />
                <IconComponent Icon={iconsData["IoIosAddCircle"]} />
              </>
            )}
            {buttons.length > 0 &&
              buttons?.map((button, i) => {
                return (
                  <React.Fragment key={`buttonsSelectorComp${i}`}>
                    <button
                      onClick={() => handleButtons(button, title, i)}
                      className={`${centerItem()} gap-4 ${titleStyles(
                        "text-1xl"
                      )} ${
                        needGenerated.supportKind === button
                          ? "pointer-events-none"
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
                      <ReactTyped
                        className={`flex-1 h-[7vh] ${centerItem(
                          "justify-start"
                        )} overflow-x-scroll text-start`}
                        strings={[button]}
                        typeSpeed={50}
                      />
                      {shouldEdit && (
                        <IconComponent
                          onClick={() => handleIconDelete(button)}
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
