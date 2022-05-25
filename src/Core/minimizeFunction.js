import React from "react";
import applyUniqueMinterm from "./applyUniqueMinterm";
import applyColumnDominance from "./applyColumnDominance";
import applyRowDominance from "./applyRowDominance";
import applyPetrickMethod from "./applyPetrickMethod";
import getReadablePrimeImplicants from "./getReadablePrimeImplicants";
import SelectionTable from "../components/SelectionTable";
import EssentialImplicants from "../components/EssentialImplicants";
import MinimizedFunction from "../components/MinimizedFunction";
import PetrickMethod from "../components/PetrickMethod";
import FunctionNotation from "../components/FunctionNotation";
import colsParser from "../utils/colsParser";
import cloneObject from "../utils/cloneObject";
import varStore from "../utils/varStore";
import { appendStep } from "../components/Result";
export default function () {
  let essentials = [];
  let prevPrimes;
  appendStep(<FunctionNotation index={varStore.currentStep++} />);
  let primes = getReadablePrimeImplicants();
  appendStep(
    <SelectionTable
      index={varStore.currentStep++}
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
  appendStep(
    <EssentialImplicants
      index={varStore.currentStep++}
      essentials={cloneObject(essentials)}
    />
  );
  if (primes.length > 0) {
    const petrickMethodResult = applyPetrickMethod(cloneObject(primes));
    appendStep(
      <PetrickMethod
        index={varStore.currentStep++}
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
  appendStep(
    <MinimizedFunction
      index={varStore.currentStep++}
      minimizations={essentials}
    />
  );
  return essentials;
}
