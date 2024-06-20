import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { titleStyles } from "../../utils/utils";
import { textColorsData } from "../../constants/colorsData";

const TyperEffect = ({
  strings,
  typeSpeed,
  backSpeed,
  loopCount = Infinity,
}) => {
  const [currentLoop, setCurrentLoop] = useState(0);

  const handleLoopComplete = () => {
    if (currentLoop < loopCount - 1) {
      setCurrentLoop(currentLoop + 1);
    } else {
      setCurrentLoop(0);
    }
  };

  return (
    <ReactTyped
      className={`${titleStyles("text-5xl")} ${textColorsData.SECONDARY}`}
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={true}
      onLoopComplete={handleLoopComplete}
    />
  );
};

export default TyperEffect;
