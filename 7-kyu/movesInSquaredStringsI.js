function vertMirror(strng) {
  let str = "";
  let arr = strng.split("\n");
  for (element of arr) {
    str += `${element.split("").reverse().join("\n")}`;
  }
  return str.slice(0, -1);
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  return fct(s);
}

oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu");
// "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt");
// "yeCt\nCSbg\nJVhv\nlVHt"
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
