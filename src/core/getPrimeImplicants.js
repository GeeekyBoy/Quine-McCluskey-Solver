import parseMinterms from "./parseMinterms";
import getPrimeImplicantsCore from "./getPrimeImplicantsCore";
import showTabularTable from "../utils/showTabularTable";

export default function () {
  const steps = [];
  let primes = [];
  let minterms = parseMinterms();
  while (true) {
    const stepRes = getPrimeImplicantsCore(minterms);
    primes = primes.concat(stepRes.primes);
    if (stepRes.result.length > 0) {
      steps.push(...showTabularTable(minterms, stepRes.primes.flat()));
      minterms = stepRes.result;
    } else {
      steps.push(...showTabularTable(minterms, minterms.flat(2)));
      primes = primes.concat(minterms.flat());
      break;
    }
  }
  primes = [...new Set(primes.map(JSON.stringify))].map(JSON.parse);
  return { steps, primes };
}
