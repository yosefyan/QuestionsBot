import React from "react";
import { useSpring, animated } from "react-spring";

const GlowingText = ({ text }) => {
  const props = useSpring({
    loop: true,
    to: [{ color: "#62D6F3" }, { color: "#CD3219" }],
    from: { color: "#CD3219" },
    config: { duration: 2500 },
  });

  return <animated.div style={props}>{text}</animated.div>;
};

export default GlowingText;
