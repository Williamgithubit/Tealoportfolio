import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section>
      <div className="text-center">
        <h1>
          <CountUp end={100} duration={2} />
        </h1>
        <p>Animated Counter</p>
      </div>
    </section>
  );
};

export default Counter;
