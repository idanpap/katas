var WordDictionary = function () {
  this.arr = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.arr.push(word);
};

WordDictionary.prototype.search = function (word) {
  if (word.includes(".")) {
    for (let val of this.arr) {
      let isCheck = true;
      const valLen = val.length;
      if (valLen === word.length) {
        for (let i = 0; i < valLen; i++) {
          if (word[i] !== ".") {
            if (val[i] !== word[i]) {
              isCheck = false;
              break;
            }
          }
        }
      } else {
        isCheck = false;
      }

      if (isCheck) return true;
    }
    return false;
  }
  return this.arr.includes(word);
};

var wd = new WordDictionary();
wd.addWord("a");
wd.addWord("at");
wd.addWord("ate");
wd.addWord("ear");
wd.search("a.");
// true)
// https://www.codewars.com/kata/5631ac5139795b281d00007d/train/javascript
