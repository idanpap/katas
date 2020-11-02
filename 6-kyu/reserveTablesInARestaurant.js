function reserve(bookings) {
  var forTwo = { name: "table for two", seats: 2, num: 4 };
  var forThree = { name: "table for three", seats: 3, num: 2 };
  var forFour = { name: "table for four", seats: 4, num: 2 };
  var forSix = { name: "table for six", seats: 6, num: 1 };
  var forEight = { name: "table for eight", seats: 8, num: 1 };
  ///start coding here:
  let unseatedStr = "";
  let arr = [];
  let unseated = [];
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i] <= 2 && forTwo.num > 0) {
      arr.push(forTwo.name);
      forTwo.num--;
    } else if (bookings[i] > 1 && bookings[i] <= 3 && forThree.num > 0) {
      arr.push(forThree.name);
      forThree.num--;
    } else if (bookings[i] > 2 && bookings[i] <= 4 && forFour.num > 0) {
      arr.push(forFour.name);
      forFour.num--;
    } else if (bookings[i] > 4 && bookings[i] <= 6 && forSix.num > 0) {
      arr.push(forSix.name);
      forSix.num--;
    } else if (bookings[i] > 6 && bookings[i] <= 8 && forEight.num > 0) {
      arr.push(forEight.name);
      forEight.num--;
    } else {
      unseated.push(i);
    }
  }

  if (unseated.length > 0) {
    unseatedStr = `Bookings at the following indexes were not accepted: ${unseated.join(
      ", "
    )}`;
  }
  return [arr, unseatedStr];
}

reserve([2, 3, 4, 6, 8]);
// [["table for two", "table for three", "table for four", "table for six", "table for eight"], ""], "should only return array of valid table names")
// https://www.codewars.com/kata/5aba8546379d20b9970001e4/train/javascript
