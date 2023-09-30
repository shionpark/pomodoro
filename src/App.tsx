import React from 'react';
import { Timer } from './components';

function App() {
  return (
    <>
      <h1>Pomodoro</h1>
      <div>
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>
      <div>
        <button>
          <svg
            style={{ display: 'block', width: '20px', height: '20px' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
          </svg>
        </button>
        <button>
          <svg
            style={{ display: 'block', width: '20px', height: '20px' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path>
          </svg>
        </button>
      </div>
      <div>
        <span>0</span>
        <span>/</span>
        <span>4</span>
        <span>round</span>
      </div>
      <div>
        <span>0</span>
        <span>/</span>
        <span>12</span>
        <span>goal</span>
      </div>
    </>
  );
}

export default App;
