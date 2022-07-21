import { AnimateRoutingProvider } from 'app/providers/animateRouting/AnimateRoutingProvider';
import React from 'react';

function Mint() {
  return (
    <AnimateRoutingProvider>
      <Test />
    </AnimateRoutingProvider>
  );
}

const Test = () => {
  return <h1>Mint</h1>;
};

export default Mint;
