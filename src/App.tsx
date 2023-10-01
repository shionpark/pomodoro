import React from 'react';
import { useTimer, useStatus } from './hooks';
import { TimerDisplay, PlayPauseButton, TimerStatus } from './components';

function App() {
  const { minutes, seconds, isPlaying, handlePlayPauseClick } = useTimer();
  const { roundsCompleted, goalsCompleted } = useStatus();

  return (
    <>
      <h1>Pomodoro</h1>
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPauseClick} />
      <TimerStatus rounds={roundsCompleted} goals={goalsCompleted} />
    </>
  );
}

export default App;
