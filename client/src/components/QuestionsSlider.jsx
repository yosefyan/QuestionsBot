import { useEffect, useRef, useState } from "react";
import { buttonStyles, centerItem } from "../utils/utils";
import TriangleComp from "../components/TriangleComp";
import { handleScroll } from "../helpers/genericHelpers";
// import PlanetsComp from "../../PlanetsComp";
import MainSquare from "./MainSquare";
import home from "../constants/home";
import PlanetsComp from "./PlanetsComp";

const QuestionsSlider = ({
  inputsState,
  setInputsState,
  Icons,
  currentData,
  requiredInputs,
  shouldFloat = false,
}) => {
  const [checkbox, setCheckBox] = useState(false);
  const heightContainer = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);

  //   const inputRefs = Object.values(registerInputs).map(() => useRef(null));

  useEffect(() => {
    // inputRefs[0].current?.focus();
    setScrollAmount(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        setScrollAmount((prev) => prev + heightContainer.current.clientHeight);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let maxHeight =
      (Icons.length - 1) * (heightContainer.current?.clientHeight || 0);
    setPercentage((scrollAmount / maxHeight) * 100);
    heightContainer.current?.scroll({
      behavior: "smooth",
      top: scrollAmount,
    });
  }, [scrollAmount]);

  return (
    <div
      noValidate
      ref={heightContainer}
      className={`lg:w-[80%] lg:h-full w-[100vw] h-[100vh] overflow-hidden`}
    >
      {Object.entries(home.buttons).map(([key, value], i) => {
        let Icon = Icons[i];
        return (
          <div
            className={`rotateSpace transition-all min-w-full h-full relative ${centerItem()} flex-col`}
            key={`registerData${i}`}
          >
            <TriangleComp shouldDown={true}>
              <a
                onClick={() =>
                  handleScroll(
                    setScrollAmount,
                    heightContainer,
                    "clientHeight",
                    "back",
                    i,
                    true,
                    percentage,
                    true
                  )
                }
                className={`${buttonStyles()} translate-y-[7vh]`}
              >
                {/* test */}
                {/* {Buttons.normalButtons.names[0]} */}
              </a>
            </TriangleComp>
            <MainSquare
              inputsState={inputsState}
              theKey={key}
              value={value}
              currentData={currentData}
              requiredInputs={requiredInputs}
              i={i}
              Icon={Icon}
              setInputsState={setInputsState}
              setCheckBox={setCheckBox}
              shouldFloat={shouldFloat}
            />
            <TriangleComp shouldFloat={shouldFloat} shouldDown={false}>
              {/* <p>test</p> */}
            </TriangleComp>
            <PlanetsComp />
          </div>
        );
      })}
    </div>
  );
};
export default QuestionsSlider;
