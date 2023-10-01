import React from 'react';
import { MAX_GOALS, MAX_ROUNDS } from '@/constants';

interface TimerStatusProps {
  rounds: number;
  goals: number;
}

const TimerStatus = ({ rounds, goals }: TimerStatusProps) => {
  return (
    <>
      <div>
        {rounds}/{MAX_ROUNDS}
      </div>
      <div>
        {goals}/{MAX_GOALS}
      </div>
    </>
  );
};

export default TimerStatus;
