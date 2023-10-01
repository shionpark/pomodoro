import React from 'react';

interface TimerStatusProps {
  rounds: number;
  goals: number;
}

const TimerStatus = ({ rounds, goals }: TimerStatusProps) => {
  return (
    <>
      <div>
        <span>{rounds}</span>
        <span>/</span>
        <span>4</span>
        <span>rounds</span>
      </div>
      <div>
        <span>{goals}</span>
        <span>/</span>
        <span>12</span>
        <span>goals</span>
      </div>
    </>
  );
};

export default TimerStatus;
