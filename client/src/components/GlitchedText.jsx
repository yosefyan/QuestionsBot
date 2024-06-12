import React from "react";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";

const GlitchText = ({ children }) => {
  const glitchRef = useSpringRef();
  const glitchProps = useSpring({
    ref: glitchRef,
    from: { transform: 'translate3d(0px, 0, 0)', color: '#00ff00' },
    to: async (next) => {
      while (1) {
        await next({ transform: 'translate3d(10px, 0, 0)', color: '#ff0000' });
        await next({ transform: 'translate3d(-10px, 0, 0)', color: '#00ff00' });
        await next({ transform: 'translate3d(0px, 0, 0)', color: '#0000ff' });
      }
    },
    config: { tension: 100, friction: 50 },
  });

  useChain([glitchRef], [0]);

  return (
    <animated.div style={{ ...glitchProps, display: 'inline-block' }}>
      {children}
    </animated.div>
  );
};


export default GlitchText;
