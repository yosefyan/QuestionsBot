import React from "react";
import { useSpring, animated } from "react-spring";

const BlinkingEye = ({
  children,
  duration = 500,
  closedHeight = 0,
  openOpacity = 1,
  closedOpacity = 0.5,
}) => {
  const springProps = useSpring({
    from: { height: "100%", opacity: openOpacity }, // Initial state: fully open and opaque
    to: [
      { height: closedHeight, opacity: closedOpacity },
      { height: "100%", opacity: openOpacity },
    ], // Blinking animation stages
    delay: duration / 2, // Delay close animation by half the duration
    config: { duration },
    loop: true, // Loop for continuous blinking
  });

  return <animated.div style={springProps}>{children}</animated.div>;
};

export default BlinkingEye;
