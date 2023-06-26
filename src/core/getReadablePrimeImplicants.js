import getPrimeImplicants from "./getPrimeImplicants";
import varStore from "../utils/varStore";

export default function () {
  const steps = [];
  let primeImplicantsRes = getPrimeImplicants();
  steps.push(...primeImplicantsRes.steps);
  let primes = primeImplicantsRes.primes;
  const alphabeticalImplicants = [];
  for (const i of Array(primes.length).keys()) {
    let cost = 0;
    primes[i][0] = primes[i][0].filter(
      (x) => !varStore.initDonotCares.includes(x)
    );
    primes[i][1] = primes[i][1]
      .split("")
      .map((x, pos) => {
        if (x === "1") {
          cost += 1;
          return varStore.initInputLetters[pos];
        } else if (x === "0") {
          cost += varStore.isComplementAvail ? 1 : 2;
          return varStore.initInputLetters[pos] + "'";
        } else {
          return "";
        }
      })
      .join("");
    alphabeticalImplicants.push(primes[i][1]);
    if (!primes[i][1].match(/^[AZ]'?$/m)) {
      cost += 1;
    }
    primes[i][2] = cost;
    if (primes[i][0].length <= 0) {
      primes[i] = null;
    }
  }
  primes = primes.filter((x) => x !== null);
  steps.push({
    type: "primeImplicants",
    implicants: alphabeticalImplicants,
  });
  return { steps, primes };
}
