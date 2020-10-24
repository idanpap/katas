function sortArray(array) {
  if (array.length === 0) {
    return array;
  }
  let arr = [...array];
  let oddArr = [];
  let evenArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(array[i]);
    }
  }

  oddArr.sort(function (a, b) {
    return a - b;
  });
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }

  return result;
}

sortArray([5, 3, 2, 8, 1, 4]);
// [1, 3, 2, 8, 5, 4]
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
