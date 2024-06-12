import React from "react";
import { centerItem } from "../../utils/utils";
import WelcomeArea from "./HomeFragments/WelcomeArea";
import ButtonsArea from "./HomeFragments/ButtonsArea";

const Home = () => {
  return (
    <div className={`bg-black h-[100vh] ${centerItem()}`}>
      <WelcomeArea />
      <ButtonsArea />
    </div>
  );
};

export default Home;
