import React from "react";
import { useSpring, animated } from "react-spring";
import { centerItem, titleStyles } from "../../utils/utils";

const GlowingText = ({ text }) => {
  const props = useSpring({
    loop: true,
    to: [{ color: "#62D6F3" }, { color: "#CD3219" }],
    from: { color: "#CD3219" },
    config: { duration: 2500 },
  });

  return <animated.div style={props}>{text}</animated.div>;
};

const GlowingBackground = ({ color, text, duration = 1000, delay }) => {
  const springProps = useSpring({
    from: { backgroundColor: color, opacity: 1 },
    to: [
      { backgroundColor: "rgb(59 130 246 / 0.5)", opacity: 0.5 },
      { backgroundColor: color, opacity: 1 },
    ],
    delay,
    config: { duration },
    loop: true,
  });

  return (
    <animated.div
      className={`w-1/2 h-full ${centerItem()} cursor-pointer gap-4 rounded-[20px] hover:scale-95 transition-all ${titleStyles(
        "text-2xl"
      )} shadow-lg shadow-white/35 hover:shadow-white/0 transiton-all`}
      style={springProps}
    >
      {text}
    </animated.div>
  );
};

export default GlowingBackground;

export { GlowingText, GlowingBackground };
