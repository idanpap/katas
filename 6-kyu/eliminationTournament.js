function tourney(array) {
  let useArr = [...array];
  let emptyArr = [];
  let odd = 0;

  while (useArr.length > 1) {
    if (useArr.length % 2 !== 0) {
      odd = 1;
    }
    emptyArr.push([...useArr]);
    for (let i = 0; i < useArr.length; i++) {
      if (useArr[i] < useArr[i + 1]) {
        useArr.splice(i, 1);
      } else {
        useArr.splice(i + 1, 1);
      }
    }
    if (odd === 1) {
      useArr.unshift(useArr.pop());
      odd = 0;
    }
  }
  emptyArr.push(useArr);
  return emptyArr;
}

const input1 = [9, 5, 4, 7, 6, 3, 8];

tourney(input1);

// const output = [
//     [9, 5, 4, 7, 6, 3, 8, 2],
//     [9, 7, 6, 8],
//     [9, 8],
//     [9]
//   ];
// https://www.codewars.com/kata/5f631ed489e0e101a70c70a0/train/javascript
