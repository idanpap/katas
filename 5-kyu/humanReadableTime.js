function humanReadable(seconds) {
  let secs = seconds % 60;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  if (secs < 10) {
    secs = `0${secs}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${mins}:${secs}`;
}

humanReadable(60);
// , '23:59:59',
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
