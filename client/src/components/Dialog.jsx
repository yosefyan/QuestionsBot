import React from "react";
import { useSelector } from "react-redux";

const Dialog = ({ children }) => {
  const { shouldOpen } = useSelector((state) => state.dialogsReducer.regularDialog);

  return (
    <div
      className={`${
        shouldOpen ? "scale-1" : "scale-0"
      } w-[95%] transition-all border h-[95%] absolute`}
    >
      {children}
    </div>
  );
};

export default Dialog;
