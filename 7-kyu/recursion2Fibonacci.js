const fibonacci = (n) => {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

fibonacci(3);
//  2
// https://www.codewars.com/kata/569512b7707bc1b88200002f/train/javascript
