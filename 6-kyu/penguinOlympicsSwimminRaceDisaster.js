function calculateWinners(snapshot, penguins) {
  let newArr = snapshot.split("\n");
  let results = [];
  let sum = 0;
  let pIndex = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum = 0;
    if (newArr[i].indexOf("P") == -1) {
      pIndex = newArr[i].indexOf("p") + 1;
    } else {
      pIndex = newArr[i].indexOf("P") + 1;
    }
    for (let j = pIndex; j < newArr[i].length - 1; j++) {
      if (newArr[i][j] == "-") {
        sum += 1;
      } else {
        sum += 2;
      }
    }
    results.push([sum, penguins[i]]);
  }
  let final = results.sort((a, b) => {
    return a[0] - b[0];
  });
  return `GOLD: ${final[0][1]}, SILVER: ${final[1][1]}, BRONZE: ${final[2][1]}`;
}

const snapshot = `|-~~------------~--P-------|
    |~~--~P------------~-------|
    |--------~-P---------------|
    |--------~-P----~~~--------|`;

const penguins = ["Joline", "Abigail", "Jane", "Gerry"];

calculateWinners(snapshot, penguins);
//  "GOLD: Joline, SILVER: Jane, BRONZE: Gerry"
// https://www.codewars.com/kata/6022c97dac16b0001c0e7ccc/train/javascript
