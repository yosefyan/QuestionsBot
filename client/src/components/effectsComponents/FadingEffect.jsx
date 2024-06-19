import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FadingEffect = ({ color, children, side, distance }) => {
  const props = useSpring({
    from: { opacity: 0, transform: `${side}(${distance})` },
    to: { opacity: 1, transform: `${side}(0)` },
    config: { duration: 1000 },
  });

  return (
    <animated.div className={`w-[70%] ${color | ""}`} style={props}>
      {children}
    </animated.div>
  );
};

export default FadingEffect;
