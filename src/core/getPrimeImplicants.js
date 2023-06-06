import parseMinterms from "./parseMinterms";
import getPrimeImplicantsCore from "./getPrimeImplicantsCore";
import showTabularTable from "../utils/showTabularTable";

export default function () {
  let primes = [];
  let minterms = parseMinterms();
  while (true) {
    const stepResult = getPrimeImplicantsCore(minterms);
    primes = primes.concat(stepResult.primes);
    if (stepResult.result.length > 0) {
      showTabularTable(minterms, stepResult.primes.flat());
      minterms = stepResult.result;
    } else {
      showTabularTable(minterms, minterms.flat(2));
      primes = primes.concat(minterms.flat());
      break;
    }
  }
  primes = Array.from(new Set(primes.map(JSON.stringify))).map(JSON.parse);
  return primes;
}
