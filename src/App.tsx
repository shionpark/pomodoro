import React from 'react';
import { useRecoilValue } from 'recoil';
import { timerSelector } from './recoils/atoms';

function App() {
  const { minutes, seconds } = useRecoilValue(timerSelector);
  return (
    <>
      <h1>Pomodoro</h1>
      <div>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
    </>
  );
}

export default App;
