import React from "react";
import applyUniqueMinterm from "./applyUniqueMinterm";
import applyColumnDominance from "./applyColumnDominance";
import applyRowDominance from "./applyRowDominance";
import applyPetrickMethod from "./applyPetrickMethod";
import getReadablePrimeImplicants from "./getReadablePrimeImplicants";
import SelectionTable from "../Components/SelectionTable";
import EssentialImplicants from "../Components/EssentialImplicants";
import MinimizedFunction from "../Components/MinimizedFunction";
import PetrickMethod from "../Components/PetrickMethod";
import FunctionNotation from "../Components/FunctionNotation";
import colsParser from "../Utils/colsParser";
import cloneObject from "../Utils/cloneObject";
import varStore from "../Utils/varStore";
import { appendStep } from "../Components/Result";
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
