import React from 'react';

interface TimerDisplayProps {
  minutes: string;
  seconds: string;
}

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  return (
    <div>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default TimerDisplay;
