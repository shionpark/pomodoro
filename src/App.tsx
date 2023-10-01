import React from 'react';
import styled from 'styled-components';

import { useTimer, useStatus } from './hooks';
import { TimerDisplay, PlayPauseButton, TimerStatus } from './components';

function App() {
  const { minutes, seconds, isPlaying, handlePlayPauseClick } = useTimer();
  const { roundsCompleted, goalsCompleted } = useStatus();

  return (
    <Container>
      <Title>🍅Pomodoro</Title>
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPauseClick} />
      <TimerStatus rounds={roundsCompleted} goals={goalsCompleted} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 700;
`;

export default App;
