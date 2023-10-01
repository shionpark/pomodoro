import { useRecoilState } from 'recoil';
import { roundsCompletedState, goalsCompletedState } from '@/recoils';

const useStatus = () => {
  const [roundsCompleted, setRoundsCompleted] = useRecoilState(roundsCompletedState);
  const [goalsCompleted, setGoalsCompleted] = useRecoilState(goalsCompletedState);

  const incrementStatus = () => {
    setRoundsCompleted((prevRounds) => prevRounds + 1);
    setGoalsCompleted((prevGoals) => prevGoals + 1);
  };

  const resetStatus = () => {
    setRoundsCompleted(0);
    setGoalsCompleted(0);
  };

  return {
    roundsCompleted,
    goalsCompleted,
    incrementStatus,
    resetStatus,
  };
};

export default useStatus;
