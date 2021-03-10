function berlinClock(time) {
  let hours = parseInt(time.slice(0, 2));
  let minutes = parseInt(time.slice(3, 5));
  let seconds = parseInt(time.slice(6));
  let secondArr = ["Y"];
  let hoursArr = ["O", "O", "O", "O"];
  let singleHoursArr = ["O", "O", "O", "O"];
  let minutesArr = ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"];
  let singleMinArr = ["O", "O", "O", "O"];
  if (seconds % 2 !== 0) {
    secondArr[0] = "O";
  }
  if (Math.floor(hours / 5) >= 1) {
    hoursArr[0] = "R";
  }
  if (Math.floor(hours / 5) >= 2) {
    hoursArr[1] = "R";
  }
  if (Math.floor(hours / 5) >= 3) {
    hoursArr[2] = "R";
  }
  if (Math.floor(hours / 5) >= 4) {
    hoursArr[3] = "R";
  }
  if (hours % 5 >= 1) {
    singleHoursArr[0] = "R";
  }
  if (hours % 5 >= 2) {
    singleHoursArr[1] = "R";
  }
  if (hours % 5 >= 3) {
    singleHoursArr[2] = "R";
  }
  if (minutes >= 5) {
    minutesArr[0] = "Y";
  }
  if (minutes >= 10) {
    minutesArr[1] = "Y";
  }
  if (minutes >= 15) {
    minutesArr[2] = "R";
  }
  if (minutes >= 20) {
    minutesArr[3] = "Y";
  }
  if (minutes >= 25) {
    minutesArr[4] = "Y";
  }
  if (minutes >= 30) {
    minutesArr[5] = "R";
  }
  if (minutes >= 35) {
    minutesArr[6] = "Y";
  }
  if (minutes >= 40) {
    minutesArr[7] = "Y";
  }
  if (minutes >= 45) {
    minutesArr[8] = "R";
  }
  if (minutes >= 50) {
    minutesArr[9] = "Y";
  }
  if (minutes >= 55) {
    minutesArr[10] = "Y";
  }
  if (minutes % 5 >= 1) {
    singleMinArr[0] = "Y";
  }
  if (minutes % 5 >= 2) {
    singleMinArr[1] = "Y";
  }
  if (minutes % 5 >= 3) {
    singleMinArr[2] = "Y";
  }
  if (minutes % 5 >= 4) {
    singleMinArr[3] = "Y";
  }
  return `${secondArr}\n${hoursArr.join("")}\n${singleHoursArr.join(
    ""
  )}\n${minutesArr.join("")}\n${singleMinArr.join("")}`;
}

berlinClock("22:32:45");
// "O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO"
