import { atom, selector } from 'recoil';
import { DEFAULT_MINUTE } from '@/constants';

export const timerState = atom({
  key: 'timerState',
  default: DEFAULT_MINUTE,
});

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});

export const intervalIdState = atom({
  key: 'intervalIdState',
  default: 0,
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

export const roundsCompletedState = atom({
  key: 'roundsCompletedState',
  default: 0,
});

export const goalsCompletedState = atom({
  key: 'goalsCompletedState',
  default: 0,
});
