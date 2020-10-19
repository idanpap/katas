function removeParentheses(s) {
  let newStr = "";
  let sign = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      sign++;
    }
    if (s[i] === ")") {
      sign--;
    }
    if (sign === 0 && s[i] !== ")") {
      newStr += s[i];
    }
  }
  return newStr;
}
