function separateTypes(input) {
  let newObj = {};
  for (let element of input) {
    if (!newObj[typeof element]) {
      newObj[typeof element] = [element];
    } else {
      newObj[typeof element].push(element);
    }
  }
  return newObj;
}

separateTypes(["a", 1, 2, false, "b"]);
// {number: [1, 2],  string: ['a', 'b'], boolean: [false]}
// https://www.codewars.com/kata/60113ded99cef9000e309be3/train/javascript
