function firstNonRepeatingLetter(s) {
  if (s.length == 0) return "";
  let arr = s.split("");
  let lowerCaseArr = [];
  let digitsChecked = [];
  arr.forEach((element) => lowerCaseArr.push(element.toLowerCase()));

  for (let i = 0; i < lowerCaseArr.length; i++) {
    if (lowerCaseArr.indexOf(lowerCaseArr[i], i + 1) === -1) {
      if (!digitsChecked.includes(lowerCaseArr[i])) {
        return arr[i];
      }
    }
    digitsChecked.push(lowerCaseArr[i]);
  }
  return "";
}

firstNonRepeatingLetter("moonmen");
// 'e'
// firstNonRepeatingLetter('stress')
// , 't'
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
