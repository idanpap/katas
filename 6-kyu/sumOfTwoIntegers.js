function add(x, y) {
  if (y == 0) {
    return x;
  } else {
    return add(x ^ y, (x & y) << 1);
  }
}

add(5, 19);
// , 24)

// https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac/train/javascript
