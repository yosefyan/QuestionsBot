import React from "react";
import { centerItem } from "../../utils/utils";
import NavBar from "../../components/NavBar";
import home from "../../constants/home";
import TitleButtons from "../../components/TitleButtons";

const Faq = () => {
  return (
    <div className={`bg-black w-full h-[100vh] ${centerItem()}`}>
      <NavBar
        routeData={home.navigateRoutes.rest}
        data={home.navBar.rest}
        shouldVertical
      />
      <div className={`w-[90%] h-full`}>
        <TitleButtons
          icon={"FaQuestion"}
          needGenerated={""}
          title={`שאלות נפוצות`}
          buttons={[]}
          subText={"כאן תוכלו לקבל מענה עבור שאלות נפוצות אודות הבוט."}
        />
      </div>
    </div>
  );
};

export default Faq;
