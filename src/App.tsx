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

interface DateProps {
  date: Date;
}

const Counter: React.FC<CounterProps> = () => {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const date: Date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="display">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count:{count}
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
    </div>
  );
};
