import React, { useEffect, useRef } from "react";
import { gradientColorsData } from "../../constants/colorsData";
import { gradient } from "../../utils/utils";
import Message from "./Message";

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
      className={`w-1/2 h-full p-4 overflow-y-scroll drop-shadow-[0_0_1rem_gray] ${gradient(
        false,
        gradientColorsData.PRIMARY
      )}`}
    >
      {needGenerated.messages.map((data, index) => (
        <>
          {Array.isArray(data.message) && (
            <p className="text-white/70 w-full text-center">
              הבוט מצא כ-{data.message.length} תוצאות רלוונטיות.
            </p>
          )}
          {Array.isArray(data.message) ? (
            data.message.map((msg, idx) => (
              <Message
                key={idx}
                isBot={data.isBot}
                message={msg || "הבוט סרק את כל הקבצים ולא מצא תשובה."}
              />
            ))
          ) : (
            <Message key={index} isBot={data.isBot} message={data.message} />
          )}
        </>
      ))}
    </div>
  );
};

export default GPTsAnswers;
