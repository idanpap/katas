function bingo(ticket, win) {
  let count = 0;
  for (let subarray of ticket) {
    for (let letter of subarray[0]) {
      if (letter.charCodeAt(0) === subarray[1]) {
        count++;
      }
    }
  }
  if (count >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}

bingo(
  [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ],
  2
);
// 'Loser!')
bingo(
  [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ],
  1
);
// 'Winner!')
// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
