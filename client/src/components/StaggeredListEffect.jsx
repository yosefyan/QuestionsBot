// App.jsx
import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Example list of items

const StaggeredListEffect = () => {
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    config: { mass: 1, tension: 2000, friction: 200 },
    delay: 1000, // Delay before the first item appears
  });

  return (
    <div>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Staggered List Animation</h1>
      <StaggeredListEffect />
    </div>
  );
};

export default App;
