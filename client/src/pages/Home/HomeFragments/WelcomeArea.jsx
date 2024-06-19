import React from "react";
import MainImage from "./MainImage";
import MainDescription from "./MainDescription";
import { centerItem } from "../../../utils/utils";
import NavBar from "../../../components/NavBar";

const WelcomeArea = () => {
  return (
    <div className={`w-full h-full ${centerItem()}`}>
      <MainDescription />
      <MainImage />
      {/* <NavBar/> */}
    </div>
  );
};

export default WelcomeArea;
