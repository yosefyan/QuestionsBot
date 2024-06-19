import React from "react";
import { centerItem } from "../../utils/utils";
import WelcomeArea from "./HomeFragments/WelcomeArea";
// import ButtonsArea from "./HomeFragments/ButtonsArea";
// import Dialog from "../../components/Dialog";
// import home from "../../constants/home";
// import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";

const Home = () => {
  // const { neededDialogIndex } = useSelector(
  //   (state) => state.dialogsReducer.regularDialog
  // );
  // const NeededComp = home.correspondingDialog[neededDialogIndex];
  return (
    <div className={`bg-black h-[100vh] ${centerItem()} flex-col`}>
      {/* <NavBar /> */}
      <WelcomeArea />
      {/* <WelcomeArea />
      <ButtonsArea /> */}
    </div>
  );
};

export default Home;
