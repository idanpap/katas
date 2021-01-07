function pigIt(str) {
  let newStr = "";
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let firstLetter = strArr[i][0];
    if (strArr[i] !== "?" && strArr[i] !== "!") {
      if (i == strArr.length - 1) {
        newStr += `${strArr[i].slice(1)}${strArr[i][0]}ay`;
      } else {
        newStr += `${strArr[i].slice(1)}${strArr[i][0]}ay `;
      }
    } else {
      newStr += strArr[i];
    }
  }
  return newStr;
}

pigIt("Hello world !");
// ,'igPay atinlay siay oolcay'

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
