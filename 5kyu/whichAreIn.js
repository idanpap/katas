function inArray(array1, array2) {
  let result = [];
  for (element of array1) {
    for (word of array2) {
      if (word.includes(element)) {
        result.push(element);
      }
    }
  }
  return [...new Set(result.sort())];
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["live", "strong", "arp"];

inArray(a1, a2);
// , ["live", "strong"]
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
