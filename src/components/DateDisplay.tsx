import React from "react";

interface DateDisplayProps {
  count: number;
  date: Date;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ count, date }) => (
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
);

export default DateDisplay;
