function digital_root(n) {
  if (n.toString().length < 2) {
    return n;
  }
  sum = 0;
  number = n.toString();
  for (let digit of number) {
    sum += parseInt(digit);
  }

  return digital_root(sum);
}

digital_root(16);
// , 7

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
