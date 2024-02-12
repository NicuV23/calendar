import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const date: Date = new Date();
  date.setDate(date.getDate() + count);

  const reset: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCount(0);
    setStep(0);
  };

  return (
    <div className="display">
      <div className="step">
        <input
          onChange={(e) => setStep(Number(e.target.value))}
          type="range"
          min="0"
          max="10"
        />
        <span>step:{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>

        <input className="count" value={count} type="number"></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="date">
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from Today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};
