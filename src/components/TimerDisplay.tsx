import React from 'react';
import styled from 'styled-components';
interface TimerDisplayProps {
  minutes: string;
  seconds: string;
}

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  return (
    <TimerWrapper>
      <TimeBlock>{minutes}</TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>{seconds}</TimeBlock>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TimeBlock = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 320px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 88px;
  font-weight: 700;
  color: tomato;
`;

const Colon = styled.h1`
  font-size: 53px;
  color: white;
  font-weight: 700;
  margin: 0 5px;
`;

export default TimerDisplay;
