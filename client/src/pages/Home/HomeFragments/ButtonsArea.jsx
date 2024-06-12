import React from "react";
import ArrowButton from "../../../components/ArrowButton";
import QuestionsSlider from "../../../components/QuestionsSlider";
import * as iconsData from "../../../constants/iconsData";

const ButtonsArea = () => {
  return (
    <div className={`w-[40%] h-full border`}>
      <ArrowButton />
      <QuestionsSlider
        Icons={[iconsData["FaSearch"], iconsData["AiOutlineOrderedList"]]}
      />
      <ArrowButton />
    </div>
  );
};

export default ButtonsArea;
