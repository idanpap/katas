function score(dice) {
  let diceCopy = [...dice];
  let roll = diceCopy.sort((a, b) => {
    return a - b;
  });
  let score = {};
  let sum = 0;
  for (let i = 0; i < roll.length; i++) {
    if (!score.hasOwnProperty(roll[i])) {
      score[roll[i]] = 1;
    } else {
      score[roll[i]]++;
    }
  }
  for (key in score) {
    if (key === "1") {
      if (score[key] < 3) {
        sum += score[key] * 100;
      } else if (score[key] % 3 === 0) {
        sum += (score[key] / 3) * 1000;
      } else if (score[key] % 3 !== 0) {
        sum += Math.floor(score[key] / 3) * 1000 + (score[key] % 3) * 100;
      }
    } else if (key === "6") {
      sum += Math.floor(score[key] / 3) * 600;
    } else if (key === "5") {
      if (score[key] < 3) {
        sum += score[key] * 50;
      } else if (score[key] % 3 === 0) {
        sum += (score[key] / 3) * 500;
      } else if (score[key] % 3 !== 0) {
        sum += Math.floor(score[key] / 3) * 500 + (score[key] % 3) * 50;
      }
    } else if (key === "4") {
      sum += Math.floor(score[key] / 3) * 400;
    } else if (key === "3") {
      sum += Math.floor(score[key] / 3) * 300;
    } else if (key === "2") {
      sum += Math.floor(score[key] / 3) * 200;
    }
  }
  return sum;
}

score([4, 4, 4, 3, 3]);
// == 400,

score([2, 3, 4, 6, 2]);
// == 0

score([2, 4, 4, 5, 4]);
// == 450
// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
