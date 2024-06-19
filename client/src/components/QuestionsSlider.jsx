import { centerItem } from "../utils/utils";
import MainSquare from "./MainSquare";
import home from "../constants/home";
import PlanetsComp from "./decorationComponents/PlanetsComp";
import { bgColorsData } from "../constants/colorsData";
import { useDispatch } from "react-redux";
import { openDialog } from "../store/Dialogs/actions/dialogsAction";

const QuestionsSlider = ({ Icons }) => {
  const dispatch = useDispatch();

  const handleButtons = (i) => {
    dispatch(openDialog("regularDialog", i));
  };

  return (
    <div
      className={`lg:w-full h-full w-[100vw] pr-4 ${centerItem(
        "justify-evenly"
      )} flex-col overflow-hidden`}
    >
      {home.buttons.map((button, i) => {
        let Icon = Icons[i];
        return (
          <div
            onClick={() => handleButtons(i)}
            className={`${bgColorsData[i === 0 ? "PRIMARY" : "SECONDARY"]} ${
              i === 0
                ? "rotate1 border-x-blue-500/20"
                : "rotate2 border-x-orange-500/20"
            } slowe transition-all border-x border-x-[3rem] min-w-full h-[45%] relative drop-shadow-[0_0_1rem_#ffffff4d] rounded-[100px] ${centerItem()} flex-col`}
            key={`registerData${i}`}
          >
            <MainSquare theKey={button} Icon={Icon} i={i} />
            <PlanetsComp />
          </div>
        );
      })}
    </div>
  );
};
export default QuestionsSlider;
