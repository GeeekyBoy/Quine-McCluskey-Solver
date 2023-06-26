import cloneObj from "../utils/cloneObj";
import parseCols from "../utils/parseCols";

export default function (primes) {
  const steps = [];
  const colImplicants = [];
  let dominatingCols = [];
  const prevPrimes = cloneObj(primes);
  for (const i of Array(primes.length).keys()) {
    for (const item of primes[i][0]) {
      if (!colImplicants[item]) {
        colImplicants[item] = [];
      }
      colImplicants[item].push(primes[i][1]);
    }
  }
  for (const i of colImplicants) {
    for (const j of colImplicants) {
      if (i !== j && i && j) {
        if (i.every((val) => j.includes(val)) && i.length < j.length) {
          dominatingCols.push(colImplicants.indexOf(j));
        }
      }
    }
  }
  dominatingCols = [...new Set(dominatingCols)].sort();
  for (const i of Array(primes.length).keys()) {
    primes[i][0] = primes[i][0].filter((x) => !dominatingCols.includes(x));
  }
  if (JSON.stringify(prevPrimes) !== JSON.stringify(primes)) {
    steps.push({
      type: "selectionTable",
      availCols: Object.keys(parseCols(prevPrimes))
        .map((x) => parseInt(x, 10))
        .sort(),
      primeImplicants: prevPrimes,
      colDominance: true,
      steps: dominatingCols,
    });
    if (primes.length) {
      steps.push({
        type: "selectionTable",
        availCols: Object.keys(parseCols(primes))
          .map((x) => parseInt(x, 10))
          .sort(),
        primeImplicants: primes,
      });
    }
  }
  return { steps, primes };
}
