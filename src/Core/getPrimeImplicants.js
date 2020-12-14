import parseMinterms from "./parseMinterms";
import getPrimeImplicantsCore from "./getPrimeImplicantsCore";
import showTabularTable from "../Utils/showTabularTable";
export default function () {
  let primes = [];
  let { minterms: input, doNotCareNumbers } = parseMinterms();
  showTabularTable(input);
  while (true) {
    const stepResult = getPrimeImplicantsCore(input);
    primes = primes.concat(stepResult.primes);
    if (stepResult.result.length > 0) {
      input = stepResult.result;
      showTabularTable(input);
    } else {
      for (const item of input[input.length - 1]) {
        primes = primes.concat([item]);
      }
      break;
    }
  }
  return {
    doNotCareNumbers,
    primes
  };
}
