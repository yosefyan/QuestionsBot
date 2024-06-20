import React, { useState } from "react";
import { centerItem, titleStyles } from "../../utils/utils";
import { textColorsData } from "../../constants/colorsData";
import NavBar from "../../components/NavBar";
import home from "../../constants/home";
import TitleButtons from "../../components/TitleButtons";
import GPTsAnswers from "../../components/questionsComps/GPTsAnswers";

const Question = () => {
  const [shouldScroll, setShouldScroll] = useState(false);
  const [needGenerated, setNeedGenerated] = useState({
    supportKind: "",
    questions: [],
    subject: "",
    i: "",
    messages: [
      {
        message: `ברוכים הבאים למנו"רובוט! איך אוכל לעזור?`,
        isBot: true,
      },
    ],
  });

  const handleNeedGenerated = (supportKind, subject, i) => {
    setShouldScroll((prev) => !prev);
    setNeedGenerated((prev) => ({
      ...prev,
      supportKind,
      subject,
      ...(subject === "נושאי תמיכה" && { i: i.toString() }),
      ...((home.questionsButtons.includes(supportKind) ||
        subject === "שאלות" ||
        subject === "כתיבת שאלה") && {
        messages: [
          ...prev.messages,
          {
            message:
              subject === "כתיבת שאלה"
                ? supportKind
                : subject === "שאלות"
                ? supportKind
                : supportKind === "שאלות מוכנות"
                ? "ברשותי שאלה מוכנה ואשמח אם תוכל לעזור לי איתה."
                : "ברשותי שאלה ייחודית ואשמח אם תוכל לעזור לי איתה.",
            isBot: false,
          },
        ],
      }),
    }));

    setTimeout(() => {
      home.questionsButtons.includes(supportKind) &&
        setNeedGenerated((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              message:
                supportKind === "שאלות מוכנות"
                  ? "אענה בשמחה! אנא בחר נושא תמיכה ושאלה."
                  : "אין בעיה! מה השאלה?",
              isBot: true,
            },
          ],
        }));
      setShouldScroll((prev) => !prev);
    }, 2500);
  };

  return (
    <div className={`bg-black w-full h-[100vh] ${centerItem()}`}>
      <NavBar
        routeData={home.navigateRoutes.rest}
        data={home.navBar.rest}
        shouldVertical
      />
      <div
        className={`w-[40%] h-full overflow-y-scroll ${centerItem(
          "justify-start"
        )} flex-col`}
      >
        <h1
          className={`${titleStyles("text-7xl")} text-start p-4 ${
            textColorsData.PRIMARY
          }`}
        >
          שאלות
        </h1>
        <TitleButtons
          needGenerated={needGenerated}
          handleNeedGenerated={handleNeedGenerated}
          title={"צורות תמיכה"}
          buttons={home.questionsButtons}
          icon={"LuShapes"}
          subText={"בחרו את דרך התקשורת הרצויה עם הבוט."}
        />
        {needGenerated.supportKind === "שאלות מוכנות" ||
        needGenerated.subject === "נושאי תמיכה" ||
        needGenerated.subject === "שאלות" ? (
          <>
            <TitleButtons
              needGenerated={needGenerated}
              handleNeedGenerated={handleNeedGenerated}
              title={"נושאי תמיכה"}
              buttons={home.readyQuestions.categories}
              icon={"MdOutlineSubject"}
              subText={"בחרו את נושא התמיכה הרצוי."}
            />
            {needGenerated.i && (
              <TitleButtons
                needGenerated={needGenerated}
                handleNeedGenerated={handleNeedGenerated}
                title={"שאלות"}
                buttons={home.readyQuestions.questions[needGenerated.i]}
                icon={"FaQuestion"}
                subText={`${
                  needGenerated.subject === "נושאי תמיכה"
                    ? `בחרו את השאלה עבור ${needGenerated.supportKind} הרלוונטית עבורכם.`
                    : `בחרתם ב-${needGenerated.supportKind} בהצלחה!`
                }`}
              />
            )}
          </>
        ) : needGenerated.supportKind === "שאילת שאלה" ||
          needGenerated.subject === "כתיבת שאלה" ? (
          <TitleButtons
            needGenerated={needGenerated}
            handleNeedGenerated={handleNeedGenerated}
            title={"כתיבת שאלה"}
            buttons={[]}
            shouldInput
            icon={"IoPencil"}
            subText={"כתבו את שאלתכם בשדה הקלט."}
          />
        ) : (
          <></>
        )}
      </div>
      <GPTsAnswers shouldScroll={shouldScroll} needGenerated={needGenerated} />
    </div>
  );
};

export default Question;
