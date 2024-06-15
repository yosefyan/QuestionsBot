import { centerItem } from "../utils/utils";
import MainSquare from "./MainSquare";
import home from "../constants/home";
import PlanetsComp from "./PlanetsComp";
import { bgColorsData, textColorsData } from "../constants/colorsData";

const QuestionsSlider = ({ Icons }) => {
  return (
    <div className={`lg:w-full h-full w-[100vw] ${centerItem('justify-evenly')} flex-col overflow-hidden`}>
      {home.buttons.map((button, i) => {
        let Icon = Icons[i];
        return (
          <>
            <div
              className={`${
                bgColorsData[i === 0 ? "PRIMARY" : "SECONDARY"]
              } border-dashed border-r-dashed transition-all min-w-full h-[45%] relative rounded-r-full ${centerItem()} flex-col`}
              key={`registerData${i}`}
            >
              <MainSquare theKey={button} Icon={Icon} i={i} />
              <PlanetsComp />
            </div>
            {/* {i === 0 && (
              <h1
                className={`h-[10%] tracking-widest ${centerItem()} memory text-white text-3xl pr-4 opacity-70 fly`}
              >
                <span
                  className={`text-6xl tShadow_PRIMARY ${textColorsData.SECONDARY} pl-2 underline underline-offset-8`}
                >
                  בחרו
                </span>
                באופציה...
              </h1>
            )} */}
          </>
        );
      })}
    </div>
  );
};
export default QuestionsSlider;
