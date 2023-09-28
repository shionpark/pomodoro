import React, { useState, useEffect } from 'react';
import { formatTime } from '@/utils';

function Timer() {
  const [time, setTime] = useState<number>(5); // 25 minutes in seconds
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);
  const [goalsCompleted, setGoalsCompleted] = useState<number>(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined; // timer 변수의 타입 명시

    if (isPlaying && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      handleRoundCompletion();
    }
    return () => clearInterval(timer);
  }, [isPlaying, time]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRoundCompletion = () => {
    setRoundsCompleted((prevRounds) => prevRounds + 1);
    setTime(5); // Reset the timer to 25 minutes
    if (roundsCompleted === 3) {
      setRoundsCompleted(0);
      setGoalsCompleted((prevGoals) => prevGoals + 1);
    }
  };

  return (
    <>
      <h1>{formatTime(time)}</h1>
      <button onClick={handlePlayPauseClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      <h2>Goals Completed: {goalsCompleted}</h2>
    </>
  );
}

export default Timer;
