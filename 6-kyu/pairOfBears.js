function bears(x, s) {
  let mateStr = "";
  for (let i = 0; i < s.length; i++) {
    if ((s[i] == "8" && s[i + 1] == "B") || (s[i] == "B" && s[i + 1] == "8")) {
      mateStr += `${s[i]}${s[i + 1]}`;
      i++;
    }
  }
  return [mateStr, mateStr.length / 2 >= x];
}

bears(7, "8j8mBliB8gimjB8B8jlB");
//  ["B8B8B8",false]
// https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript
