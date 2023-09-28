import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { timerState, isPlayingState, roundsCompletedState, goalsCompletedState } from '@/atoms';
import { formatTime } from '@/utils';
import { DEFAULT_TIME } from '@/constants';

function Timer() {
  const [time, setTime] = useRecoilState(timerState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [roundsCompleted, setRoundsCompleted] = useRecoilState(roundsCompletedState);
  const [goalsCompleted, setGoalsCompleted] = useRecoilState(goalsCompletedState);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

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
    setTime(DEFAULT_TIME);
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
