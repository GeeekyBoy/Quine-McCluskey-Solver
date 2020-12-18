import parseMinterms from "./parseMinterms";
import getPrimeImplicantsCore from "./getPrimeImplicantsCore";
import showTabularTable from "../Utils/showTabularTable";
import cloneObject from "../Utils/cloneObject"
export default function () {
  let primes = [];
  let { minterms: input, doNotCareNumbers } = parseMinterms();
  while (true) {
    const stepResult = getPrimeImplicantsCore(input);
    primes = primes.concat(stepResult.primes);
    if (stepResult.result.length > 0) {
      showTabularTable(input, stepResult.primes.flat());
      input = stepResult.result;
    } else {
      showTabularTable(input, input.flat(2));
        primes = primes.concat(input.flat());
      break;
    }
  }
  primes = Array.from(new Set(primes.map(JSON.stringify))).map(JSON.parse);
  return {
    doNotCareNumbers,
    primes
  };
}
