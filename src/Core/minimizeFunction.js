import React from "react";
import applyUniqueMinterm from "./applyUniqueMinterm";
import applyColumnDominance from "./applyColumnDominance";
import applyRowDominance from "./applyRowDominance";
import applyPetrickMethod from "./applyPetrickMethod";
import getReadablePrimeImplicants from "./getReadablePrimeImplicants";
import SelectionTable from "../Components/SelectionTable";
import EssentialImplicants from "../Components/EssentialImplicants";
import PetrickMethod from "../Components/PetrickMethod";
import colsParser from "../Utils/colsParser";
import cloneObject from "../Utils/cloneObject";
import { appendStep } from "../Components/Result";
export default function () {
  let essentials = [];
  let prevPrimes;
  let primes = getReadablePrimeImplicants();
  appendStep(
    <SelectionTable
      availCols={Object.keys(colsParser(cloneObject(primes)))
        .map((x) => parseInt(x, 10))
        .sort()}
      primeImplicants={cloneObject(primes)}
    />
  );
  do {
    prevPrimes = cloneObject(primes);
    const uniqueMintermResult = applyUniqueMinterm(cloneObject(primes));
    if (uniqueMintermResult.essentials) {
      uniqueMintermResult.essentials.forEach((x) => essentials.push(x));
    }
    primes = uniqueMintermResult.primes;
    if (primes.length <= 0) {
      break;
    }
    primes = applyRowDominance(cloneObject(primes));
    if (primes.length <= 0) {
      break;
    }
    primes = applyColumnDominance(cloneObject(primes));
    if (primes.length <= 0) {
      break;
    }
  } while (JSON.stringify(primes) !== JSON.stringify(prevPrimes));
  if (primes.length > 0) {
    const petrickMethodResult = applyPetrickMethod(cloneObject(primes));
    appendStep(
      <PetrickMethod
        stepsData={petrickMethodResult.steps}
        mapping={petrickMethodResult.primesPetrickMapping}
      />
    );

    essentials = petrickMethodResult.essentials.map((x) =>
      essentials.concat(x)
    );
  }
  if (typeof essentials[0] !== "object") {
    essentials = [essentials];
  }
  appendStep(<EssentialImplicants minimizations={essentials} />);
  return essentials;
}
