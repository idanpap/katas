function dashatize(num) {
  if (isNaN(num)) {
    return "NaN";
  }
  let arr = [];
  let odd = 0;
  let number = Math.abs(num).toString().split("");
  arr.push(number[0]);
  if (parseInt(number[0]) % 2 !== 0 && number.length > 1) {
    arr.push("-");
    odd = 1;
  }
  for (let i = 1; i < number.length; i++) {
    if (parseInt(number[i]) % 2 === 0) {
      arr.push(number[i]);
      odd = 0;
    } else {
      if (odd === 0) {
        arr.push("-");
      }

      arr.push(number[i]);
      if (i !== number.length - 1) {
        arr.push("-");
        odd = 1;
      }
    }
  }
  return arr.join("");
}

dashatize(781);
// , "9-7-4-3-02", "Should return 9-7-4-3-02"
// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
