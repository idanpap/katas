function spinWords() {
  let words = arguments[0].split(" ");
  let str = "";
  for (let word of words) {
    if (word.length > 4) {
      let newWord = word.split("").reverse().join("");

      str += `${newWord} `;
    } else {
      str += `${word} `;
    }
  }
  return str.trim();
}

spinWords("This is another test");
// , "This is rehtona test"
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
