function meeting(s) {
  arr = [];
  let str = "";
  sUpper = s.toUpperCase();
  upperArr = sUpper.split(";");
  for (element of upperArr) {
    arr.push(element.split(":"));
  }
  let sortedArray = arr.sort(function (a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[1] === b[1] && a[0] < b[0]) return -1;
    if (a[1] === b[1] && a[0] > b[0]) return 1;
  });
  console.log(sortedArray);
  for (element of sortedArray) {
    str += `(${element[1]}, ${element[0]})`;
  }
  return str;
}

meeting(
  "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
);

// "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
