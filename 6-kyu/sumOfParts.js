function partsSums(ls) {
  let sumArray = [];
  count = 0;
  for (element of ls) {
    count += element;
  }
  sumArray.push(count);
  for (element of ls) {
    count -= element;
    sumArray.push(count);
  }
  return sumArray;
}

partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]);
// [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
//https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
