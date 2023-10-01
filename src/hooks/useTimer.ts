import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  timerSelector,
  isPlayingState,
  timerState,
  intervalIdState,
  roundsCompletedState,
  goalsCompletedState,
} from '@/recoils';
import { DEFAULT_MINUTE } from '@/constants';

const useTimer = () => {
  const { minutes, seconds } = useRecoilValue(timerSelector);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [time, setTime] = useRecoilState(timerState);
  const [intervalId, setIntervalId] = useRecoilState(intervalIdState);
  const [roundsCompleted, setRoundsCompleted] = useRecoilState(roundsCompletedState);
  const [goalsCompleted, setGoalsCompleted] = useRecoilState(goalsCompletedState);

  useEffect(() => {
    if (time < 0) {
      setTime(0);
    }

    if (time === 0) {
      clearInterval(intervalId);
      setIsPlaying(false);
      setTime(DEFAULT_MINUTE);

      setRoundsCompleted((prevRounds) => prevRounds + 1);
      if (roundsCompleted === 3) {
        setRoundsCompleted(0);
        setGoalsCompleted((prevGoals) => prevGoals + 1);
      }
    }
  }, [time, setIsPlaying, intervalId, setTime, setRoundsCompleted, setGoalsCompleted]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      const newIntervalId = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);

      setIntervalId(newIntervalId);
    } else {
      clearInterval(intervalId);
      setIntervalId(0);
    }
  };
  return {
    minutes,
    seconds,
    isPlaying,
    handlePlayPauseClick,
    roundsCompleted,
    goalsCompleted,
  };
};

export default useTimer;
