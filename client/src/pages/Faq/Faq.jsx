import React from "react";
import { centerItem } from "../../utils/utils";
import NavBar from "../../components/NavBar";
import home from "../../constants/home";
import TitleButtons from "../../components/TitleButtons";
import TitleAnswer from "../../components/TitleAnswer";
import faq from "../../constants/faq";
import { ReactTyped } from "react-typed";

const Faq = () => {
  return (
    <div className={`bg-black w-full h-[100vh] overflow-y-scroll ${centerItem()}`}>
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
        {faq.answersQuestions.map((aq, i) => {
          return (
            <React.Fragment key={`faqAnswersQuestions${i}`}>
              <TitleAnswer title={aq.question} answer={<ReactTyped strings={[aq.answer]} typeSpeed={5} />} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
