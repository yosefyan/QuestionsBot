import React from "react";
import { centerItem } from "../../utils/utils";
import WelcomeArea from "./HomeFragments/WelcomeArea";
import ButtonsArea from "./HomeFragments/ButtonsArea";
import Dialog from "../../components/Dialog";
import home from "../../constants/home";
import { useSelector } from "react-redux";

const Home = () => {
  const { neededDialogIndex } = useSelector(
    (state) => state.dialogsReducer.regularDialog
  );
  const NeededComp = home.correspondingDialog[neededDialogIndex];
  return (
    <div className={`bg-black h-[100vh] ${centerItem()}`}>
      <div className="w-full h-full absolute opacity-10 bg-portal-pattern bg-[length:100%_100%]"></div>
      <Dialog>
        <NeededComp />
      </Dialog>
      <WelcomeArea />
      <ButtonsArea />
    </div>
  );
};

export default Home;
