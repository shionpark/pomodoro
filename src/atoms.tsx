import { atom } from 'recoil';
import { DEFAULT_TIME } from './constants';

export const timerState = atom({
  key: 'timerState',
  default: DEFAULT_TIME,
});

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});

export const roundsCompletedState = atom({
  key: 'roundsCompletedState',
  default: 0,
});

export const goalsCompletedState = atom({
  key: 'goalsCompletedState',
  default: 0,
});
