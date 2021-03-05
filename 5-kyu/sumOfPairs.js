function sumPairs(ints, s) {
  if (ints.length < 2) return undefined; //not enough numbers for pair.
  let intSet = new Set();
  intSet.add(ints[0]);
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
    if (intSet.has(needed)) {
      return [needed, ints[i]];
    }
    intSet.add(ints[i]);
  }
  return undefined;
}

sumPairs([1, 4, 8, 7, 3, 15], 8);
// , [3, 7]
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
