import React from 'react';
import styled from 'styled-components';

import { MAX_GOALS, MAX_ROUNDS } from '@/constants';

interface TimerStatusProps {
  rounds: number;
  goals: number;
}

const TimerStatus = ({ rounds, goals }: TimerStatusProps) => {
  return (
    <>
      <StatusWrapper>
        <Status>
          <StatusScore>
            {rounds}/{MAX_ROUNDS}
          </StatusScore>
          <StatusName>round</StatusName>
        </Status>
        <Status>
          <StatusScore>
            {goals}/{MAX_GOALS}
          </StatusScore>
          <StatusName>goal</StatusName>
        </Status>
      </StatusWrapper>
    </>
  );
};

const StatusWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Status = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatusScore = styled.div`
  opacity: 0.8;
`;

const StatusName = styled.div`
  padding-top: 10px;
  text-transform: uppercase;
`;

export default TimerStatus;
