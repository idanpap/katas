function nthSmallest(...arrays) {
  let n = arrays.pop();
  return [].concat(...arrays).sort((a, b) => a - b)[n - 1];
}

nthSmallest([1, 5], [2], [4, 8, 9], 4);
// === 5
// https://www.codewars.com/kata/56f2d43fe40b70a442000f26/train/javascript
