export const formatTime = (time: number) => {
  const formattedMinutes = String(Math.floor(time / 60)).padStart(2, '0');
  const formattedSeconds = String(time % 60).padStart(2, '0');
  return { formattedMinutes, formattedSeconds };
};
