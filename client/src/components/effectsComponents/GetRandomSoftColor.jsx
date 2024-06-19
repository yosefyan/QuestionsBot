import React from "react";
import randomColor from "randomcolor";
import upDownIndex from "../../helpers/upDownIndex";

const randomSoftColor = () => {
  return randomColor({
    // luminosity: "light",
    format: "rgba",
    alpha: 0.2,
  });
};

const GetRandomSoftColor = ({
  title,
  onClick,
  i,
  question,
  categoriesIndex,
}) => {
  const backgroundColor = randomSoftColor();
  const style = {
    backgroundColor,
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  return (
    <div
      onClick={onClick}
      className={`w-[80%] h-[80%] p-4 m-auto border-t border-t-8 bg-gray-500 text-white/80 ${
        categoriesIndex.includes(question || i)
          ? "border-t-green-600/80"
          : "border-t-red-600/80"
      } shadow-[0_0_1rem_black] cursor-pointer hover:scale-95 transition-all`}
      style={style}
    >
      {title}
    </div>
  );
};

export default GetRandomSoftColor;
