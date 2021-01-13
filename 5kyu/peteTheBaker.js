function cakes(recipe, available) {
  let amount;
  let fit;
  let counter = 0;
  let fullfilled = 0;

  for (element in recipe) {
    if (available[element]) {
      fullfilled++;
      if (counter == 0) {
        amount = Math.floor(available[element] / recipe[element]);
      }
      fit = Math.floor(available[element] / recipe[element]);

      if (fit < amount) {
        amount = fit;
      }
      counter++;
    }
  }
  if (fullfilled == Object.keys(recipe).length) {
    return amount;
  } else {
    return 0;
  }
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);

//  2;
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
