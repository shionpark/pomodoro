import { selector } from 'recoil';
import { timerState } from '@/recoils';

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
