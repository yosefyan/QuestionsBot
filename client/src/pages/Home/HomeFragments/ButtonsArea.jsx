import React from "react";
import QuestionsSlider from "../../../components/QuestionsSlider";
import * as iconsData from "../../../constants/iconsData";
import { centerItem } from "../../../utils/utils";
import Dialog from "../../../components/Dialog";

const ButtonsArea = () => {
  
  return (
    <div className={`w-[40%] h-full relative ${centerItem()}`}>
      <div
        className={`w-full h-full absolute opacity-10`}
      ></div>
      <QuestionsSlider
        Icons={[iconsData["MdChecklistRtl"], iconsData["FaSearch"]]}
      />
    </div>
  );
};

export default ButtonsArea;
