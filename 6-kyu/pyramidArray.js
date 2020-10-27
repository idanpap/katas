function pyramid(n) {
  let arr = [];
  let subarray = [];
  for (let i = 0; i < n; i++) {
    subarray = [...subarray];
    subarray.push(1);
    arr.push(subarray);
  }
  return arr;
}

pyramid(14);
// [[1], [1, 1], [1, 1, 1]])
//https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript
