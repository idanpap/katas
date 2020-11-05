function addArrays(array1, array2) {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  if (array1.length === 0 && array2.length === 0) return [];
  let arrayToNumber1 = parseInt(array1.join(""));
  let arrayToNumber2 = parseInt(array2.join(""));

  let result = arrayToNumber1 + arrayToNumber2;
  let resultArray = Array.from(Math.abs(result).toString()).map(Number);
  if (result < 0) {
    resultArray[0] = resultArray[0] * -1;
  }
  return resultArray;
}

addArrays([-6, 7], []);
// [6, 7]
// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript
