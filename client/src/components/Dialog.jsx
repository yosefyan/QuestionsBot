import React from "react";
import { useSelector } from "react-redux";
import HowDoesItWork from "./questionsComps/HowDoesItWork";
import { centerItem } from "../utils/utils";

const Dialog = ({ children }) => {
  const { shouldOpen } = useSelector(
    (state) => state.dialogsReducer.regularDialog
  );

  return (
    <div
      style={{ zIndex: 999999 }}
      className={`${
        shouldOpen ? "scale-1" : "scale-0"
      } w-[95%] bg-black transition-all h-[95%] ${centerItem()} absolute`}
    >
      {children}
      <HowDoesItWork />
    </div>
  );
};

export default Dialog;
