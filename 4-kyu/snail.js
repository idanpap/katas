let snail = function (array) {
  let arr = [];
  let copy = JSON.parse(JSON.stringify(array));
  let num = array.length;

  while (arr.length < Math.pow(num, 2)) {
    for (element of copy[0]) {
      arr.push(element);
    }
    copy = copy.slice(1);
    if (copy.length == 0) {
      break;
    }
    for (let i = 0; i < copy.length - 1; i++) {
      arr.push(copy[i].pop());
    }
    if (copy.length == 0) {
      break;
    }
    for (let i = copy[copy.length - 1].length - 1; i >= 0; i--) {
      arr.push(copy[copy.length - 1][i]);
    }
    if (copy.length == 0) {
      break;
    }
    copy.pop();
    if (copy.length == 0) {
      break;
    }

    for (let i = copy.length - 1; i >= 0; i--) {
      arr.push(copy[i].shift());
    }
    if (copy.length == 0) {
      break;
    }
  }
  return arr;
};

snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]
snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
