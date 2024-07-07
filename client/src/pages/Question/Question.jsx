import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { centerItem, titleStyles } from "../../utils/utils";
import { textColorsData } from "../../constants/colorsData";
import NavBar from "../../components/NavBar";
import home from "../../constants/home";
import TitleButtons from "../../components/TitleButtons";
import GPTsAnswers from "../../components/questionsComps/GPTsAnswers";
import AddNewData from "../../components/questionsComps/AddNewData";

const Question = () => {
  const [shouldScroll, setShouldScroll] = useState(false);
  const [shouldExtend, setShouldExtend] = useState(false);
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

  const handleExtendedPart = (bool) => {
    setShouldExtend(bool);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scroll({
      behavior: "smooth",
      top: containerRef.current.scrollHeight * needGenerated.messages.length,
    });
  }, [shouldScroll]);

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
      const uploadReadyQuestion = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5174/botQuestion",
            {
              question: supportKind,
            }
          );
          supportKind !== "שאלות מוכנות" &&
            subject !== "נושאי תמיכה" &&
            supportKind !== "שאילת שאלה" &&
            setNeedGenerated((prev) => ({
              ...prev,
              messages: [
                ...prev.messages,
                {
                  message: response.data.answers || response.data.answer,
                  isBot: true,
                },
              ],
            }));
          setShouldScroll((prev) => !prev);
        } catch (error) {
          console.log(error);
        }
      };
      uploadReadyQuestion();
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
    }, 3000);
  };

  return (
    <div className={`bg-black w-full relative h-[100vh] ${centerItem()}`}>
      <NavBar
        routeData={home.navigateRoutes.rest}
        data={home.navBar.rest}
        shouldVertical
      />
      <div
        ref={containerRef}
        className={`w-[40%] h-full overflow-y-auto ${centerItem(
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
              handleExtendedPart={handleExtendedPart}
              shouldAdd
              needGenerated={needGenerated}
              handleNeedGenerated={handleNeedGenerated}
              title={"נושאי תמיכה"}
              buttons={[]}
              icon={"MdOutlineSubject"}
              subText={"בחרו את נושא התמיכה הרצוי."}
            />
            {needGenerated.i && (
              <TitleButtons
                handleExtendedPart={handleExtendedPart}
                shouldAdd
                needGenerated={needGenerated}
                handleNeedGenerated={handleNeedGenerated}
                title={"שאלות"}
                buttons={[]}
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
      {shouldExtend && (
        <AddNewData
          title={needGenerated.subject}
          handleExtendedPart={handleExtendedPart}
          shouldExtend={shouldExtend}
          endpoint={
            needGenerated.subject === "שאלות" ? "question" : "userSubject"
          }
        />
      )}
    </div>
  );
};

export default Question;
