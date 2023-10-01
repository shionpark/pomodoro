import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { timerSelector } from '@/recoils';
interface TimerDisplayProps {
  minutes: string;
  seconds: string;
}

const timerBlockVariants: Variants = {
  initial: { scale: 0.8, opacity: 0.4 },
  animate: { scale: 1.0, opacity: 1 },
};

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  const { minutes: animatedMinutes, seconds: animatedSeconds } = useRecoilValue(timerSelector);

  return (
    <TimerWrapper>
      <TimeBlock
        as={motion.span}
        initial="initial"
        animate="animate"
        transition={{ type: 'spring' }}
        variants={timerBlockVariants}
        key={`minutes-${animatedMinutes}`}
      >
        {minutes}
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock
        as={motion.span}
        initial="initial"
        animate="animate"
        transition={{ type: 'spring' }}
        variants={timerBlockVariants}
        key={`seconds-${animatedSeconds}`}
      >
        {seconds}
      </TimeBlock>
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
