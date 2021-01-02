function findOdd(A) {
  obj = {};
  for (let element of A) {
    if (!obj.hasOwnProperty(element)) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  }
  for (let counter in obj) {
    if (obj[counter] % 2 !== 0) {
      return parseInt(counter);
    }
  }
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
// 5
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
