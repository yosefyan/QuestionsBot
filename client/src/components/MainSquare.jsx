import { useEffect } from "react";
import {
  centerItem,
  iconStyles,
  labelStyles,
  titleStyles,
} from "../utils/utils";

const MainSquare = ({
  inputsState,
  theKey,
  addName,
  requiredInputs,
  i,
  Icon,
  setCheckBox,
}) => {
  useEffect(() => {
    setCheckBox(false);
  }, []);

  return (
    <div
      className={`lg:w-[70%] w-full transition-all z-50 shadow-lg shadow-black h-[70%] rounded-2xl border-[1.5rem] border-black/75 ${centerItem()} justify-around flex-col`}
    >
      <i
        className={`${iconStyles("text-9xl")}
         drop-shadow-[0_0_1rem_white]`}
      >
        <Icon />
      </i>
      {/* button here */}
    </div>
  );
};

export default MainSquare;
