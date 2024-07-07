import React from "react";
import { centerItem } from "../../utils/utils";
import WelcomeArea from "./HomeFragments/WelcomeArea";

import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <div className={`bg-black h-[100vh] ${centerItem()} flex-col`}>
      <WelcomeArea />
    </div>
  );
};

export default Home;
