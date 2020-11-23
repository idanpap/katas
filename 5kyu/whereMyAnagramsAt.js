function anagrams(word, words) {
  let letters = word.split("");
  let dict = {};
  let testObj = {};
  let result = [];
  let count = 0;
  for (element of letters) {
    if (!dict.hasOwnProperty(element)) {
      dict[element] = 1;
    } else {
      dict[element] += 1;
    }
  }
  words.forEach((element) => {
    count = 0;
    testObj = {};
    for (letter of element) {
      if (!testObj.hasOwnProperty(letter)) {
        testObj[letter] = 1;
      } else {
        testObj[letter] += 1;
      }
    }

    for (let dicts in testObj) {
      if (dict.hasOwnProperty(dicts) && dict[dicts] === testObj[dicts]) {
        count++;
      }
    }
    if (Object.keys(dict).length == count) {
      result.push(element);
    }
  });
  return result;
}

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
// ['aabb', 'bbaa']
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
