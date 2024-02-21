import React, { useState } from "react";
import CounterControls from "./CounterControls";
import DateDisplay from "./DateDisplay";

const Counter: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const date: Date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  const handleIncrement = () => {
    setCount((c) => c + step);
  };

  const handleDecrement = () => {
    setCount((c) => c - step);
  };

  const reset = () => {
    setCount(0);
    setStep(0);
  };

  return (
    <div className="display">
      <CounterControls
        step={step}
        onStepChange={handleStepChange}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <div>
        <button onClick={handleDecrement}>-</button>
        <input className="count" value={count} type="number" readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
      <DateDisplay count={count} date={date} />
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default Counter;
