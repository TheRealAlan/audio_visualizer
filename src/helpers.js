export function formatTime(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration - minutes * 60);
  
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
};