function solve(x, y) {
  let sum = 0;
  let parsedNum = 0;
  let compareString = "";
  for (let i = x; i < y; i++) {
    parsedNum = i.toString();
    for (let j = parsedNum.length; j >= 0; j--) {
      if (parsedNum[j] === "6") {
        compareString += "9";
      } else if (parsedNum[j] === "9") {
        compareString += "6";
      } else if (parsedNum[j] === "0") {
        compareString += parsedNum[j];
      } else if (parsedNum[j] === "1") {
        compareString += parsedNum[j];
      } else if (parsedNum[j] === "8") {
        compareString += parsedNum[j];
      }
    }
    if (parsedNum == compareString) {
      sum++;
    }

    compareString = "";
  }
  return sum;
}

solve(10, 100);
// 3
// https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript
