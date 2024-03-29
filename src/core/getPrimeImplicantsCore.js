import replaceAt from "../utils/replaceAt";
import varStore from "../utils/varStore";

export default function (input) {
  const groupsCount = input.length;
  let result = [];
  const used = [];
  let primes = [];
  for (const groupPairIndex of Array(groupsCount - 1).keys()) {
    let isGroupUsed = false;
    const pairFirstElement = input[groupPairIndex];
    const pairSecondElement = input[groupPairIndex + 1];
    for (const pairFirstElementItem of pairFirstElement) {
      let isUsed = false;
      for (const diffPos of [...Array(varStore.initInputsNumber).keys()]) {
        const pattern = new RegExp(
          replaceAt(pairFirstElementItem[1], diffPos, ".")
        );
        for (const pairSecondElementItem of pairSecondElement) {
          if (pattern.test(pairSecondElementItem[1])) {
            const resultBinary = replaceAt(pairSecondElementItem[1], diffPos, "-");
            isUsed = true;
            if (!isGroupUsed) {
              result.push([]);
              isGroupUsed = true;
            }
            if (!used.includes(pairFirstElementItem[1])) {
              used.push(pairFirstElementItem[1]);
            }
            if (!used.includes(pairSecondElementItem[1])) {
              used.push(pairSecondElementItem[1]);
            }
            result[result.length - 1].push([
              [...new Set(pairFirstElementItem[0].concat(pairSecondElementItem[0]))].sort(),
              resultBinary
            ]);
          }
        }
      }
      if (!used.includes(pairFirstElementItem[1]) && !isUsed) {
        primes.push(pairFirstElementItem);
      }
    }
    if (groupPairIndex == groupsCount - 2) {
      for (const pairSecondElementItem of pairSecondElement) {
        if (!used.includes(pairSecondElementItem[1])) {
          primes.push(pairSecondElementItem);
        }
      }
    }
  }
  result = result.map((x) => [...new Set(x.map(JSON.stringify))].map(JSON.parse));
  primes = [...new Set(primes.map(JSON.stringify))].map(JSON.parse);
  return {
    result,
    primes
  };
}
