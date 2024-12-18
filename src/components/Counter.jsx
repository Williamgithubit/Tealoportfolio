import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  const counter = [
    { end: 10, suffix: "k+", name: "Projects Completed" },
    { end: 850, suffix: "+", name: "Clients Reviewed" },
    { end: 15, suffix: "+", name: "Free Resources" },
  ];

  return (
    <section className="counter mt-20 w-full flex flex-wrap justify-center bg-blue-600 h-auto p-5">
      {counter.map((count, index) => (
        <div key={index} className="text-center w-full sm:w-1/2 lg:w-1/4 p-5 text-white">
          <h1>
            <CountUp
              className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-xl"
              suffix={count.suffix}
              end={count.end}
              duration={15}
            />
          </h1>
          <p className="text-lg sm:text-xl">{count.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Counter;
