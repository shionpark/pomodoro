import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { timerSelector, isPlayingState, timerState, intervalIdState } from './recoils/atoms';
import { DEFAULT_MINUTE } from './constants';

function App() {
  const { minutes, seconds } = useRecoilValue(timerSelector);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [time, setTime] = useRecoilState(timerState);
  const [intervalId, setIntervalId] = useRecoilState(intervalIdState);

  useEffect(() => {
    // 타이머가 0 이하로 가지 않도록 설정
    if (time < 0) {
      setTime(0);
    }

    // 타이머가 0이 되면 재생을 멈추고 intervalId를 클리어
    if (time === 0) {
      clearInterval(intervalId);
      setIsPlaying(false);
      setTime(DEFAULT_MINUTE);
    }
  }, [time, setIsPlaying, intervalId, setTime]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      // play 버튼 클릭후 타이머 시작
      const newIntervalId = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);

      setIntervalId(newIntervalId); // intervalIdState 업데이트
    } else {
      // 재생이 멈춘 경우 intervalState 클리어
      clearInterval(intervalId);
      setIntervalId(0); // intervalIdState 업데이트
    }
  };

  return (
    <>
      <h1>Pomodoro</h1>
      <div>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
      <button onClick={handlePlayPauseClick}>
        {isPlaying ? (
          <svg
            style={{ display: 'block', width: '20px', height: '20px' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path>
          </svg>
        ) : (
          <svg
            style={{ display: 'block', width: '20px', height: '20px' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
          </svg>
        )}
      </button>
    </>
  );
}

export default App;
