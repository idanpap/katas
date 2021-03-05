with (Math)
  circleIntersection = ([a, b], [c, d], r) =>
    ((-sin((x = 2 * acos(hypot(a - c, b - d) / 2 / r))) + x) * r * r) | 0;

circleIntersection([0, 0], [7, 0], 5);
// 14
// https://www.codewars.com/kata/5908242330e4f567e90000a3/train/javascript
