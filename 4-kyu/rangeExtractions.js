function solution(list) {
  let result = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 2] - 2) {
      result += list[i].toString() + "-";
      for (let j = i; j < list.length; j++) {
        if (list[j] === list[j + 1] - 1) {
          i++;
        } else {
          result += list[i].toString();
          if (i !== list.length - 1) {
            result += ",";
          }
          break;
        }
      }
    } else {
      result += list[i].toString();
      if (i !== list.length - 1) {
        result += ",";
      }
    }
  }
  return result;
}

solution([
  -6,
  -3,
  -2,
  -1,
  0,
  1,
  3,
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  14,
  15,
  17,
  18,
  19,
  20,
]);
//"-6,-3-1,3-5,7-11,14,15,17-20"
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
