"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increament = (counter) => {
    setCounter((counter) => (counter += 1));
    console.log("increament in clicked", counter);
  };
  const decrement = (counter) => {
    setCounter((counter) => (counter -= 1));

    console.log("decrement in clicked", counter);
  };
  return (
    <div className="flex align-middle gap-x-3">
      <button
        onClick={decrement}
        className=" font-bold bg-yellow-500 py-2 px-4 max-w-fit text-lg"
      >
        -
      </button>
      <span className="text-4xl font-bold">{counter}</span>
      <button
        onClick={increament}
        className=" font-bold bg-yellow-500 py-2 px-4 max-w-fit text-lg"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
