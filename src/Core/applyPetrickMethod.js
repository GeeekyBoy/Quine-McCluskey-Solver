import colsParser from "../Utils/colsParser";
export default function (primes) {
  let primesPetrickMapping = {};
  let petrickPrimesMapping = {};
  for (const [key, val] of primes.entries()) {
    primesPetrickMapping[`p${key + 1}`] = val[1];
    petrickPrimesMapping[val[1]] = `p${key + 1}`;
  }
  let steps = [
    Object.values(colsParser(primes)).map((x) =>
      x.map((y) => petrickPrimesMapping[y])
    )
  ];
  let stepsLastIndex = 0;
  while (steps[steps.length - 1].length > 1) {
    steps[++stepsLastIndex] = [];
    let j = 0;
    for (const i of [
      ...Array(Math.round(steps[steps.length - 2].length / 2)).keys()
    ]) {
      let bracket = [];
      for (const leftItem of steps[steps.length - 2][i + j]) {
        if (steps[steps.length - 2][i + j + 1]) {
          for (const rightItem of steps[steps.length - 2][i + j + 1]) {
            bracket.push(
              leftItem !== rightItem ? leftItem + rightItem : leftItem
            );
          }
        } else {
          bracket.push(leftItem);
        }
      }
      bracket = bracket.map((x) =>
        [...new Set(x.match(new RegExp("..", "g")).sort())].join("")
      );
      bracket = [...new Set(bracket)];
      steps[stepsLastIndex].push(bracket);
      j++;
    }
  }
  let minLength = Infinity;
  let petrickEssentials = [];
  let essentials = [];
  for (const item of steps[stepsLastIndex][0]) {
    const itemLength = item.length / 2;
    if (itemLength < minLength) {
      minLength = itemLength;
      petrickEssentials = [];
      essentials = [];
      petrickEssentials.push(item);
      essentials.push(
        item.match(new RegExp("..", "g")).map((x) => primesPetrickMapping[x])
      );
    } else if (itemLength === minLength) {
      petrickEssentials.push(item);
      essentials.push(
        item.match(new RegExp("..", "g")).map((x) => primesPetrickMapping[x])
      );
    }
  }
  return {
    steps,
    primesPetrickMapping,
    petrickEssentials,
    essentials
  };
}
