import React from "react";
import { centerItem } from "../../utils/utils";
import WelcomeArea from "./HomeFragments/WelcomeArea";
import ButtonsArea from "./HomeFragments/ButtonsArea";
import Dialog from "../../components/Dialog";

const Home = () => {
  return (
    <div
      className={`bg-black bg-stars-pattern bg-[length:100%_100%] h-[100vh] ${centerItem()}`}
    >
      <Dialog></Dialog>
      <WelcomeArea />
      <ButtonsArea />
    </div>
  );
};

export default Home;
