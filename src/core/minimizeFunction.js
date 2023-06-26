import applyUniqueMinterm from "./applyUniqueMinterm";
import applyColDominance from "./applyColDominance";
import applyRowDominance from "./applyRowDominance";
import applyPetrickMethod from "./applyPetrickMethod";
import getReadablePrimeImplicants from "./getReadablePrimeImplicants";
import parseCols from "../utils/parseCols";
import cloneObj from "../utils/cloneObj";

export default function () {
  const steps = [];
  let essentials = [];
  let prevPrimes;
  let primes;
  let primeImplicantsRes = getReadablePrimeImplicants();
  steps.push(...primeImplicantsRes.steps);
  primes = primeImplicantsRes.primes;
  steps.push({
    type: "selectionTable",
    availCols: Object.keys(parseCols(primes))
      .map((x) => parseInt(x, 10))
      .sort(),
    primeImplicants: cloneObj(primes)
  });
  do {
    prevPrimes = cloneObj(primes);
    const uniqueMintermRes = applyUniqueMinterm(cloneObj(primes));
    steps.push(...uniqueMintermRes.steps);
    essentials.push(...(uniqueMintermRes.essentials || []));
    primes = uniqueMintermRes.primes;
    if (!primes.length) break;
    rowDominanceRes = applyRowDominance(cloneObj(primes));
    steps.push(...rowDominanceRes.steps);
    primes = rowDominanceRes.primes;
    if (!primes.length) break;
    colDominanceRes = applyColDominance(cloneObj(primes));
    steps.push(...colDominanceRes.steps);
    primes = colDominanceRes.primes;
    if (!primes.length) break;
  } while (JSON.stringify(primes) !== JSON.stringify(prevPrimes));
  steps.push({
    type: "essentialImplicants",
    essentials: cloneObj(essentials)
  });
  if (primes.length) {
    const petrickMethodRes = applyPetrickMethod(cloneObj(primes));
    steps.push({
      type: "petrickMethod",
      steps: petrickMethodRes.steps,
      mapping: petrickMethodRes.primesPetrickMapping
    });
    essentials = petrickMethodRes.essentials.map((x) => essentials.concat(x));
  }
  if (typeof essentials[0] !== "object") {
    essentials = [essentials];
  }
  steps.push({
    type: "minimizedFunction",
    minimizations: essentials
  });
  return steps;
}
