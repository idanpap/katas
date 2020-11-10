function recycle(array) {
  let bins = [[], [], [], []];
  for (element of array) {
    if (
      element["material"] === "paper" ||
      element["secondMaterial"] === "paper"
    ) {
      bins[0].push(element["type"]);
    }
    if (
      element["material"] === "glass" ||
      element["secondMaterial"] === "glass"
    ) {
      bins[1].push(element["type"]);
    }
    if (
      element["material"] === "organic" ||
      element["secondMaterial"] === "organic"
    ) {
      bins[2].push(element["type"]);
    }
    if (
      element["material"] === "plastic" ||
      element["secondMaterial"] === "plastic"
    ) {
      bins[3].push(element["type"]);
    }
  }
  return bins;
}

let a = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

recycle(a);
// let b = [
//   ['wine bottle', 'amazon box', 'beer bottle'],
//   ['wine bottle', 'beer bottle'],
//   ['rotten apples', 'out of date yogurt'],
//   ['out of date yogurt']
// ]
