function bowlingPins(arr) {
  let result = "";
  let line = [[], [], [], []];
  for (let i = 7; i <= 10; i++) {
    if (arr.includes(i)) {
      line[0].push(" ");
    } else {
      line[0].push("I");
    }
  }
  result = line[0].join(" ") + "\n";
  for (let i = 4; i <= 6; i++) {
    if (arr.includes(i)) {
      line[1].push(" ");
    } else {
      line[1].push("I");
    }
  }
  result += " " + line[1].join(" ") + " \n";
  for (let i = 2; i <= 3; i++) {
    if (arr.includes(i)) {
      line[2].push(" ");
    } else {
      line[2].push("I");
    }
  }
  result += "  " + line[2].join(" ") + "  \n";
  if (arr.includes(1)) {
    line[3].push(" ");
  } else {
    line[3].push("I");
  }
  result += "   " + line[3].join(" ") + "   ";
  return result;
}

console.log(bowlingPins([2, 3]));
//  "I I I I\n I I I \n       \n   I   "
// https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript
