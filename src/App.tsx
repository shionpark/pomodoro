import React from 'react';
import { useTimer } from './hooks';
import { TimerDisplay, PlayPauseButton, TimerStatus } from './components';

function App() {
  const { minutes, seconds, isPlaying, handlePlayPauseClick, roundsCompleted, goalsCompleted } =
    useTimer();

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
