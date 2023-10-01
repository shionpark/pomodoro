import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { roundsCompletedState, goalsCompletedState } from '@/recoils';
import { MAX_GOALS, MAX_ROUNDS } from '@/constants';

const useStatus = () => {
  const [roundsCompleted, setRoundsCompleted] = useRecoilState(roundsCompletedState);
  const [goalsCompleted, setGoalsCompleted] = useRecoilState(goalsCompletedState);

  const incrementStatus = () => {
    setRoundsCompleted((prevRounds) => {
      const newRounds = prevRounds + 1;
      if (newRounds === MAX_ROUNDS) {
        return 0;
      }
      return newRounds;
    });

    if (roundsCompleted === MAX_ROUNDS - 1) {
      setGoalsCompleted((prevGoals) => prevGoals + 1);
    }
  };

  const resetStatus = () => {
    setRoundsCompleted(0);
    setGoalsCompleted(0);
  };

  useEffect(() => {
    if (goalsCompleted >= MAX_GOALS) {
      setGoalsCompleted(0);
    }
  }, [goalsCompleted]);

  return {
    roundsCompleted,
    goalsCompleted,
    incrementStatus,
    resetStatus,
  };
};

export default useStatus;
