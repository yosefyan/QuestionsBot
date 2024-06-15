import { bgColorsData, gradientColorsData } from "../constants/colorsData";
import { centerItem, gradient, iconStyles, titleStyles } from "../utils/utils";

const MainSquare = ({ Icon, theKey, i }) => {
  return (
    <div
      className={`lg:w-[60%] cursor-pointer hover:scale-[.95] transition-all text-3xl h-[70%] text-white/50 ${
        i === 0 ? "-skew-y-6" : "skew-y-6"
      } shadow-xl shadow-white/20 ${gradient(
        false,
        gradientColorsData[i === 0 ? "PRIMARY" : "SECONDARY"]
      )} w-full transition-all z-50 shadow-lg shadow-black h-[60%] rounded-2xl ${centerItem()} justify-around flex-col`}
    >
      <i
        className={`text-white/50 opacity-50 rotateSpace ${iconStyles(
          "text-[10vmin]"
        )}
         drop-shadow-[0_0_1rem_white]`}
      >
        <Icon />
      </i>
      <p
        className={`w-full tShadow_SECONDARY h-[30%] ${centerItem()} ${
          bgColorsData[i === 0 ? "PRIMARY" : "SECONDARY"]
        } ${titleStyles("text-[5vmin]")}`}
      >
        {theKey}
      </p>
    </div>
  );
};

export default MainSquare;
