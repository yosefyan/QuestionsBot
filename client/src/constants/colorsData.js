import { titleStyles } from "../utils/utils";

const textColorsData = {
  PRIMARY: "text-blue-500/50",
  SECONDARY: "text-orange-500/50",
};

const bgColorsData = {
  PRIMARY: "bg-blue-500/15",
  SECONDARY: "bg-orange-500/15",
};

const gradientColorsData = {
  PRIMARY: "bg-gradient-to-r from-blue-500/20 to-orange-500/20",
  SECONDARY: "bg-gradient-to-r from-orange-500/20 to-blue-500/20",
};

const greenButton = `w-full p-4 rounded-[20px] text-white/40 hover:scale-95 transition-all ${titleStyles(
  "text-2xl"
)}`;

const inputStyle = `w-full focus:outline-none rounded-[20px] bg-gray-500/15 p-4 ${textColorsData.SECONDARY} bg-transparent border-b border-b-8 border-b-blue-500/35`;

export {
  textColorsData,
  bgColorsData,
  gradientColorsData,
  greenButton,
  inputStyle,
};
