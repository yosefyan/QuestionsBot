import React, { useEffect, useRef } from "react";
import { gradientColorsData } from "../../constants/colorsData";
import { gradient } from "../../utils/utils";
import Message from "./Message";
import { ReactTyped } from "react-typed";

const GPTsAnswers = ({ shouldScroll, needGenerated }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scroll({
      behavior: "smooth",
      top: containerRef.current.scrollHeight * needGenerated.messages.length,
    });
  }, [shouldScroll]);

  return (
    <div
      ref={containerRef}
      className={`w-1/2 h-full p-4 overflow-y-auto drop-shadow-[0_0_1rem_gray] ${gradient(
        false,
        gradientColorsData.PRIMARY
      )}`}
    >
      {needGenerated.messages.map((data, index) => {
        return (
          <div key={index}>
            <Message
              isBot={data.isBot}
              message={<ReactTyped strings={[data.message]} typeSpeed={15} />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GPTsAnswers;
