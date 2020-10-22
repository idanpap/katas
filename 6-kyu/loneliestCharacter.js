function loneliest(str) {
  str = str.trim();
  let leftSpaces = 0;
  let max = 0;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    let rightSpaces = 0;
    for (let j = 1; str[i + j] === " "; j++) rightSpaces++;
    if (leftSpaces + rightSpaces > max) {
      max = leftSpaces + rightSpaces;
      arr = [str[i]];
    } else if (leftSpaces + rightSpaces === max) arr.push(str[i]);
    leftSpaces = rightSpaces;
  }
  return arr;
}

loneliest("a  b  c  de  ");
// .sort(), ['b', 'c'], "result"
