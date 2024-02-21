import React from "react";

interface CounterControlsProps {
  step: number;
  onStepChange: (step: number) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterControls: React.FC<CounterControlsProps> = ({
  step,
  onStepChange,
  onIncrement,
  onDecrement,
}) => (
  <div className="step">
    <input
      onChange={(e) => onStepChange(Number(e.target.value))}
      type="range"
      min="0"
      max="10"
    />
    <span>step: {step}</span>
  </div>
);

export default CounterControls;
