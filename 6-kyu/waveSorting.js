function waveSort(arr) {
  arr = arr.sort(function (a, b) {
    return b - a;
  });

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i - 1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    if (i + 1 < arr.length && arr[i + 1] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]);
// "The array is not wave-sorted"
// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript
