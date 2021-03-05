function orderWeight(strng) {
  let arr = strng.split(" ");
  let suma = 0;
  let sumb = 0;
  function bubble_Sort(a) {
    let swapp;
    let n = a.length - 1;
    let x = a;
    do {
      swapp = false;
      for (let i = 0; i < n; i++) {
        if (
          x[i]
            .split("")
            .map(Number)
            .reduce(function (a, b) {
              return a + b;
            }, 0) >
          x[i + 1]
            .split("")
            .map(Number)
            .reduce(function (a, b) {
              return a + b;
            }, 0)
        ) {
          let temp = x[i];
          x[i] = x[i + 1];
          x[i + 1] = temp;
          swapp = true;
        } else if (
          x[i]
            .split("")
            .map(Number)
            .reduce(function (a, b) {
              return a + b;
            }, 0) ==
          x[i + 1]
            .split("")
            .map(Number)
            .reduce(function (a, b) {
              return a + b;
            }, 0)
        ) {
          if (x[i] > x[i + 1]) {
            let temp = x[i + 1];
            x[i + 1] = x[i];
            x[i] = temp;
            swapp = true;
          }
        }
      }
      n--;
    } while (swapp);
    return x;
  }
  return bubble_Sort(arr).join(" ");
}
console.log(
  orderWeight(
    "270110 123 191973 30 72282 10 126946 40 344306 4 295108 83 345052 72 55097 7 314421 32 499981 33 99"
  ) ==
    "10 30 4 40 32 123 33 7 72 270110 83 314421 99 345052 344306 72282 295108 55097 126946 191973 499981"
);
// orderWeight("270110 123 191973 30 72282 10 126946 40 344306 4 295108 83 345052 72 55097 7 314421 32 499981 33 99")

console.log(
  orderWeight(
    "104 41 123 43 80 74 74 165 67 184 237400 179 28016 235363 340981 116886 479327 349637 269366 374954 368399"
  ) ==
    "104 41 123 43 80 74 74 165 184 67 237400 179 28016 235363 340981 116886 269366 349637 374954 479327 368399"
);

//  "10 30 4 40 32 123 33 7 72 270110 83 314421 99 345052 344306 72282 295108 55097 126946 191973 499981"
console.log(
  orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") ==
    "11 11 2000 10003 22 123 1234000 44444444 9999"
);
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
// , "11 11 2000 10003 22 123 1234000 44444444 9999"
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
