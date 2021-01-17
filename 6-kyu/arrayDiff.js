function arrayDiff(a, b) {
  let result = [];
  for (element of a) {
    if (b.indexOf(element) == -1) {
      result.push(element);
    }
  }
  return result;
}

arrayDiff([3, 4], [3]);
// [4]
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
