function isAValidMessage(message) {
  if (!isNaN(message[message.length - 1])) {
    return false;
  }
  let word = "";
  let wordArr = [];
  let number = "";
  let numArr = [];
  for (let i = 0; i < message.length; i++) {
    if (isNaN(message[i])) {
      word += message[i];
      if (number.length > 0) {
        numArr.push(parseInt(number));
      }
      number = "";
    }
    if (!isNaN(message[i])) {
      number += message[i];
      if (word.length > 0) {
        wordArr.push(word);
      }
      word = "";
    }
  }
  if (word.length > 0) {
    wordArr.push(word);
  }
  if (number.length > 0) {
    numArr.push(parseInt(number));
  }
  if (numArr.length !== wordArr.length) {
    return false;
  }
  for (let i = 0; i < wordArr.length; i++) {
    if (numArr[i] != wordArr[i].length) {
      return false;
    }
  }
  return true;
}
isAValidMessage("3hey5hello2hi");
// true
// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript
