import React from 'react';
import { useTimer } from './hooks';
import { TimerDisplay, PlayPauseButton } from './components';

function App() {
  const { minutes, seconds, isPlaying, handlePlayPauseClick } = useTimer();

  return (
    <>
      <h1>Pomodoro</h1>
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPauseClick} />
    </>
  );
}

export default App;
