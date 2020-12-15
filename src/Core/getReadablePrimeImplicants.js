import React from "react";
import getPrimeImplicants from "./getPrimeImplicants";
import PrimeImplicants from "../Components/PrimeImplicants";
import varStore from "../Utils/varStore";
import { appendStep } from "../Components/Result";
export default function () {
  let { doNotCareNumbers, primes } = getPrimeImplicants();
  let alphabiticalImplicants = [];
  for (const i of [...Array(primes.length).keys()]) {
    let cost = 0;
    primes[i][0] = primes[i][0].filter((x) => !doNotCareNumbers.includes(x));
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
    alphabiticalImplicants.push(primes[i][1]);
    if (!primes[i][1].match(new RegExp("^[AZ]'?$", "m"))) {
      cost += 1;
    }
    primes[i][2] = cost;
    if (primes[i][0].length <= 0) {
      primes[i] = null;
    }
  }
  primes = primes.filter((x) => x !== null);
  appendStep(<PrimeImplicants implicants={alphabiticalImplicants} />);
  return primes;
}
