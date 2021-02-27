function getDay(day, isLeap) {
  if (day <= 31) {
    return `January, ${day}`;
  } else if (isLeap) {
    if (day <= 60) {
      return `February, ${day - 31}`;
    } else if (day <= 91) {
      return `March, ${day - 60}`;
    } else if (day <= 121) {
      return `April, ${day - 91}`;
    } else if (day <= 152) {
      return `May, ${day - 121}`;
    } else if (day <= 182) {
      return `June, ${day - 152}`;
    } else if (day <= 213) {
      return `July, ${day - 182}`;
    } else if (day <= 244) {
      return `August, ${day - 213}`;
    } else if (day <= 274) {
      return `September, ${day - 244}`;
    } else if (day <= 305) {
      return `October, ${day - 274}`;
    } else if (day <= 335) {
      return `November, ${day - 305}`;
    } else {
      return `December, ${day - 335}`;
    }
  } else {
    if (day <= 59) {
      return `February, ${day - 31}`;
    } else if (day <= 90) {
      return `March, ${day - 59}`;
    } else if (day <= 120) {
      return `April, ${day - 90}`;
    } else if (day <= 151) {
      return `May, ${day - 120}`;
    } else if (day <= 181) {
      return `June, ${day - 151}`;
    } else if (day <= 212) {
      return `July, ${day - 181}`;
    } else if (day <= 243) {
      return `August, ${day - 212}`;
    } else if (day <= 273) {
      return `September, ${day - 243}`;
    } else if (day <= 304) {
      return `October, ${day - 273}`;
    } else if (day <= 334) {
      return `November, ${day - 304}`;
    } else {
      return `December, ${day - 334}`;
    }
  }
}

getDay(91, false);
// ("April, 1")
getDay(60, true);
// ("February, 29")
// https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript
