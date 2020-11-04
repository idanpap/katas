function pickPeaks(arr) {
  let obj = { pos: [], peaks: [] };
  if (arr.length === 0) return obj;
  let position = -1000;
  let peak = -1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      position = i;
      peak = arr[i];
    }
    if (arr[i] < peak) {
      obj.pos.push(position);
      obj.peaks.push(peak);
      position = -100;
      peak = -100;
    }
  }
  return obj;
}

pickPeaks([
  1,
  2,
  5,
  4,
  3,
  2,
  3,
  6,
  4,
  1,
  2,
  3,
  3,
  4,
  5,
  3,
  2,
  1,
  2,
  3,
  5,
  5,
  4,
  3,
]);
//  {pos:[2,7,14,20], peaks:[5,6,5,5]}
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
