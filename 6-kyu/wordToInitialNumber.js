function convert(s) {
  if (s === "") return 0;
  let str = s.toLowerCase();
  let obj = {};
  let endStr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
      if (Object.keys(obj).length === 1) {
        obj[str[i]] = 0;
      } else {
        obj[str[i]] = count;
        count++;
      }
    }
  }
  for (let j = 0; j < str.length; j++) {
    endStr += obj[str[j]];
  }
  return parseInt(endStr);
}
convert("KATA");
// , 10234567
//  https://www.codewars.com/kata/5bb148b840196d1be50000b1/train/javascript
