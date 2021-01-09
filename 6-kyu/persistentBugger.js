function persistence(num) {
  function persistenceOne(num, counter) {
    if (num < 10) {
      return counter;
    }

    let numberStr = num.toString();
    let sum = 1;
    for (let i = 0; i < num.toString().length; i++) {
      sum *= parseInt(numberStr[i]);
    }
    counter++;

    return persistenceOne(sum, counter);
  }
  return persistenceOne(num, 0);
}
persistence(39);
// 2

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
