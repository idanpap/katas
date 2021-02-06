function getLines(line) {
  if (isNaN(line) || line <= 0) return -1;
  let seq = ["1"];

  function getNextSeq(input) {
    let split = input.split("");
    let result = [];
    for (let i = 0, count = 0, current = split[i]; i < split.length; i++) {
      count += 1;

      let next = split[i + 1];
      if (next == null || next !== current) {
        result.push([String(count), current]);
        current = next;
        count = 0;
      }
    }
    return result;
  }

  function flatNumber(seq) {
    return seq.reduce((prev, next) => prev.concat(next), []).join("");
  }

  let f = (a) => flatNumber(getNextSeq(a));

  let i = 0;
  while (i < line - 1) {
    seq[i + 1] = f(seq[i]);
    i++;
  }

  return seq.join();
}
getLines(3);
// "1,11,21"
// https://www.codewars.com/kata/5263c5d011f4233c9d000561/train/javascript
