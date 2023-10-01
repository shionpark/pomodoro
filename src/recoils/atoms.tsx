import { atom, selector } from 'recoil';

const MINUTE = 1; // standard : 25분
const DEFAULT_MINUTE = MINUTE * 60;

export const timerState = atom({
  key: 'timerState',
  default: DEFAULT_MINUTE,
});

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});

export const timerSelector = selector({
  key: 'timerSelector',
  get: ({ get }) => {
    const time = get(timerState);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      minutes,
      seconds,
    };
  },
});
