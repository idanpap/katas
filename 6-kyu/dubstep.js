function songDecoder(song) {
  let arr = song.split("WUB");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      newArr.push(arr[i]);
      newArr.push(" ");
    }
  }
  newArr.pop();
  return newArr.join("");
}

songDecoder("AWUBWUBWUBBWUBWUBWUBC");
// , "A B C","multiples WUB should be replaced by only 1 space"
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
