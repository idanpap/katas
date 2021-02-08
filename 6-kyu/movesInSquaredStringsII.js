function rot(strng) {
  let str = "";
  let arr = strng.split("\n");
  for (element of arr) {
    str += `${element.split("").reverse().join("")}\n`;
  }
  console.log(str);
  return str.split("\n").reverse().join("\n").slice(1);
}
function selfieAndRot(strng) {
  let str = "";
  let arr = strng.split("\n");
  let dots = "";
  for (let i = 0; i < arr[0].length; i++) {
    dots += ".";
  }
  for (let word of arr) {
    str += `${word}${dots}\n`;
  }
  let secArr = str.split("\n").reverse();
  let newStr = "";
  for (element of secArr) {
    newStr += `${element.split("").reverse().join("")}\n`;
  }
  return str + newStr.slice(1, -1);
}
function oper(fct, s) {
  return fct(s);
}

oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL");
// "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif"
oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP");
// "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
// https://www.codewars.com/kata/56dbe7f113c2f63570000b86/train/javascript
