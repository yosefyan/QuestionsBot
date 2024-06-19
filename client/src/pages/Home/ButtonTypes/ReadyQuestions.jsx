import React, { useEffect, useState } from "react";
import CategoriesSelector from "../../../components/questionsComps/CategoriesSelector";
import QuestionsSelector from "../../../components/questionsComps/QuestionsSelector";
import { centerItem, titleStyles } from "../../../utils/utils";
import GPTsAnswers from "../../../components/questionsComps/GPTsAnswers";
import * as iconsData from "../../../constants/iconsData";
import { bgColorsData } from "../../../constants/colorsData";
import IconComponent from "../../../components/IconComponent";

const ReadyQuestions = () => {
  const [categoriesIndex, setCategoriesIndex] = useState({
    categories: [],
    questions: [],
  });

  const [shouldShrink, setShouldShrink] = useState(false);

  const handleClickedIndex = (i, neededKey, question) => {
    setCategoriesIndex((prevCategoriesIndex) => {
      const newArray = { ...prevCategoriesIndex };
      const updatedArray = [...newArray[neededKey]];
      const neededPlace = neededKey === "categories" ? i : question;
      if (!updatedArray.includes(neededPlace)) {
        updatedArray.push(neededPlace);
      } else {
        const neededIndex = updatedArray.findIndex(
          (arr) => arr === neededPlace
        );
        updatedArray.splice(neededIndex, 1);
      }
      newArray[neededKey] = updatedArray;
      return newArray;
    });
  };

  return (
    <div
      className={`w-[70%] h-[90%] ${centerItem(
        `${shouldShrink ? "justify-between" : ""}`
      )} ${shouldShrink ? "" : "flex-col"} gap-4`}
    >
      <div
        className={`${
          shouldShrink ? "w-[80%] scale-1" : "scale-0 absolute"
        } ${centerItem()} gap-4 flex-col h-full transition-all`}
      >
        <GPTsAnswers categoriesIndex={categoriesIndex} />
        <button
          onClick={() => setShouldShrink(false)}
          className={`p-4 ${
            bgColorsData.PRIMARY
          } rounded-[30px] w-[85%] ${centerItem()} gap-4 text-white/70 ${titleStyles(
            "text-2xl"
          )}`}
        >
          <IconComponent Icon={iconsData["IoPencil"]} />
          שינוי שאלה
        </button>
      </div>
      <div
        className={`${
          shouldShrink ? "w-[20%] text-[0rem]" : "w-full"
        } transition-all h-full ${centerItem(
          "justify-evenly"
        )} flex-col gap-4`}
      >
        <CategoriesSelector
          shouldShrink={shouldShrink}
          categoriesIndex={categoriesIndex["categories"]}
          handleClickedIndex={(i) => handleClickedIndex(i, "categories", null)}
        />
        <QuestionsSelector
          shouldShrink={shouldShrink}
          categoriesIndex={categoriesIndex}
          handleClickedIndex={(i, _, question) =>
            handleClickedIndex(i, "questions", question)
          }
        />
        <button
          onClick={() => setShouldShrink(true)}
          className={`w-[80%] text-white ${
            shouldShrink ? "scale-0 absolute" : "scale-1"
          } ${titleStyles(
            "text-3xl"
          )} transition-all rounded-full shadow-xl shadow-gray-500/50 h-[20%] p-4 ${
            categoriesIndex.questions.length > 0
              ? "bg-green-500/40 hover:scale-95"
              : "cursor-not-allowed pointer-events-none bg-red-500/40"
          }`}
        >
          קבלת תשובה
        </button>
      </div>
    </div>
  );
};

export default ReadyQuestions;
