// useTimer.js
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isPlayingState, timerState, intervalIdState } from '@/recoils';

import { DEFAULT_MINUTE } from '@/constants';
import { formatTime } from '@/utils';
import { useStatus } from '@/hooks';

const useTimer = () => {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [time, setTime] = useRecoilState(timerState);
  const [intervalId, setIntervalId] = useRecoilState(intervalIdState);
  const { incrementStatus } = useStatus();

  useEffect(() => {
    if (time < 0) {
      setTime(0);
    }

    if (time === 0) {
      clearInterval(intervalId);
      setIsPlaying(false);
      setTime(DEFAULT_MINUTE);
      incrementStatus();
    }
  }, [time, setIsPlaying, intervalId, setTime, incrementStatus]);

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

  const { formattedMinutes, formattedSeconds } = formatTime(time);

  return {
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    isPlaying,
    handlePlayPauseClick,
  };
};

export default useTimer;
