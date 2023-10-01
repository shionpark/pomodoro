import React from 'react';

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  return (
    <div>
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default TimerDisplay;
