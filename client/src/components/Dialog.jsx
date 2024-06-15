import React from "react";

const Dialog = ({ children }) => {
  return <div className={`w-[80%] h-[80%] absolute`}>{children}</div>;
};

export default Dialog;
