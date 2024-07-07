import React, { useRef } from "react";
import GetRandomSoftColor from "../effectsComponents/GetRandomSoftColor";
import home from "../../constants/home";

const CategoriesSelector = ({
  shouldShrink,
  categoriesIndex,
  handleClickedIndex,
}) => {
  const handleCategories = (i) => {
    handleClickedIndex(i);
  };

  return (
    <div
      className={`bg-gray-600/20 ${
        shouldShrink ? "w-full" : "w-[75%]"
      } h-[40%] overflow-y-scroll rounded-[20px]`}
    >
      <div
        className={`w-full grid grid-cols-3 p-4 ${
          shouldShrink ? "pointer-events-none" : ""
        }`}
      >
        {home.readyQuestions.categories.map((category, i) => {
          return (
            <React.Fragment key={`categoriesQuestion${i}`}>
              <GetRandomSoftColor
                categoriesIndex={categoriesIndex}
                i={i}
                onClick={() => handleCategories(i)}
                title={category}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSelector;
