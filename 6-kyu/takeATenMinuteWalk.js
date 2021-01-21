function isValidWalk(walk) {
  let obj = {};
  //insert brilliant code here
  if (walk.length !== 10) {
    return false;
  }
  for (let direction of walk) {
    if (!(direction in obj)) {
      obj[direction] = 0;
    } else {
      obj[direction] += 1;
    }
  }

  if (Object.keys(obj).length == 2) {
    if (
      ((Object.keys(obj).sort()[0] == "n" &&
        Object.keys(obj).sort()[1] == "s") ||
        (Object.keys(obj).sort()[0] == "e" &&
          Object.keys(obj).sort()[1] == "w")) &&
      Object.values(obj)[1] == Object.values(obj)[0]
    ) {
      return true;
    }
  } else if (Object.keys(obj).length == 4) {
    if (obj["n"] == obj["s"] && obj["e"] == obj["w"]) {
      return true;
    }
  }
  return false;
}

isValidWalk(["e", "w", "e", "w", "n", "s", "n", "s", "e", "w"]);
//    'should return true'
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
