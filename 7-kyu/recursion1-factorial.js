const factorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

factorial(3);
// , 6)
// https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript
