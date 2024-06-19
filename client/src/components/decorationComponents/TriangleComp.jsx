import React from "react";
import { centerItem } from "../../utils/utils";
import { triangleStyles } from "../../utils/utils";

const TriangleComp = ({ children, shouldDown }) => {
  return (
    <div
      className={`buttons ${centerItem()} ${triangleStyles(
        shouldDown
      )} flex-col z-50`}>
      {children}
    </div>
  );
};

export default TriangleComp;
