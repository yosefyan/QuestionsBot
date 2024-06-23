import React from "react";
import home from "../../constants/home";
import GetRandomSoftColor from "../effectsComponents/GetRandomSoftColor";
import { centerItem, titleStyles } from "../../utils/utils";
import { textColorsData } from "../../constants/colorsData";

const QuestionsSelector = ({
  shouldShrink,
  categoriesIndex,
  handleClickedIndex,
}) => {
  const handleCategories = (i, question) => {
    handleClickedIndex(i, "questions", question);
  };
  const questionsLength = categoriesIndex.questions.length;

  return (
    <div
      className={`bg-sky-500/50 downUp ${shouldShrink ? 'w-full' : 'w-[75%]'} h-[60%] p-4 overflow-hidden overflow-y-scroll gap-4 rounded-[20px]`}
    >
      <h1
        className={`${titleStyles("text-1xl")} ${centerItem()} ${
          textColorsData.SECONDARY
        } tShadow_SECONDARY w-full text-center`}
      >
        {questionsLength === 1
          ? "נבחרה שאלה אחת"
          : `נבחרו ${questionsLength} שאלות`}{" "}
        סה"כ
      </h1>
      {categoriesIndex["categories"].length > 0 || questionsLength > 0 ? (
        categoriesIndex["categories"].map((value, i) => {
          return (
            <div
              key={`categoriesIndex${i}`}
              className={`w-full ${
                shouldShrink ? "pointer-events-none" : ""
              } bg-black/30 my-4 rounded-[20px] p-4 ${centerItem(
                shouldShrink ? "" : "justify-start",
                "items-start"
              )} flex-col`}
            >
              <h1
                className={`${titleStyles(
                  `${shouldShrink ? "text-[0rem]" : "text-2xl"}`
                )} bg-black/70 p-2 w-full rounded-[20PX] my-4 text-white/70`}
              >
                {home.readyQuestions.categories[value]}
              </h1>
              {home.readyQuestions.questions[value].map((question, i) => {
                return (
                  <GetRandomSoftColor
                    question={question}
                    onClick={() => handleCategories(i, question)}
                    categoriesIndex={categoriesIndex["questions"]}
                    key={`specificQuestions${i}`}
                    title={question}
                  />
                );
              })}
            </div>
          );
        })
      ) : (
        <div
          className={`w-full h-[90%] ${centerItem(
            "justify-evenly"
          )} flex-col ${titleStyles("text-1xl")}`}
        >
          <h1 className={`text-white/80 tShadow_SECONDARY`}>
            אנא בחרו קטגורייה אחת לפחות.
          </h1>
        </div>
      )}
    </div>
  );
};

export default QuestionsSelector;
