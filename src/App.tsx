import React from 'react';
import { useTimer } from './hooks';
import { TimerDisplay, PlayPauseButton } from './components';

function App() {
  const { minutes, seconds, isPlaying, handlePlayPauseClick, roundsCompleted, goalsCompleted } =
    useTimer();

  return (
    <>
      <h1>Pomodoro</h1>
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPauseClick} />
      <div>
        <span>{roundsCompleted}</span>
        <span>/</span>
        <span>4</span>
        <span>rounds</span>
      </div>
      <div>
        <span>{goalsCompleted}</span>
        <span>/</span>
        <span>12</span>
        <span>goals</span>
      </div>
    </>
  );
}

export default App;
