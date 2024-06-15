import { centerItem } from "../utils/utils";
import home from "../constants/home";

const PlanetsComp = () => {
  return (
    <ul
      className={`stars absolute w-[40%] blur-[1rem] h-[70vh] ${centerItem()} animate-spin slowe justify-evenly`}
    >
      {home.lines.map((_, planetIndex) => {
        return (
          <li
            key={`planetsRotate${planetIndex}`}
            style={{
              width: `${planetIndex * 14}%`,
              height: `${planetIndex * 14}%`,
              transform: `translateY(${planetIndex * 2}%)`,
              animationDuration: `${planetIndex * 15}s`,
            }}
            className={`border-[3rem] border-dashed border-orange-500/30 rotate rounded-[25%] absolute text-white/40`}
          >
            <div className="w-full h-full border-x-[.5rem] border-dashed rounded-lg"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default PlanetsComp;
