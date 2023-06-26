import React from "react";
import applyUniqueMinterm from "./applyUniqueMinterm";
import applyColDominance from "./applyColDominance";
import applyRowDominance from "./applyRowDominance";
import applyPetrickMethod from "./applyPetrickMethod";
import getReadablePrimeImplicants from "./getReadablePrimeImplicants";
import SelectionTable from "../components/SelectionTable";
import EssentialImplicants from "../components/EssentialImplicants";
import MinimizedFunction from "../components/MinimizedFunction";
import PetrickMethod from "../components/PetrickMethod";
import FunctionNotation from "../components/FunctionNotation";
import parseCols from "../utils/parseCols";
import cloneObj from "../utils/cloneObj";
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
      availCols={Object.keys(parseCols(primes))
        .map((x) => parseInt(x, 10))
        .sort()}
      primeImplicants={cloneObj(primes)}
    />
  );
  do {
    prevPrimes = cloneObj(primes);
    const uniqueMintermResult = applyUniqueMinterm(cloneObj(primes));
    if (uniqueMintermResult.essentials) {
      uniqueMintermResult.essentials.forEach((x) => essentials.push(x));
    }
    primes = uniqueMintermResult.primes;
    if (!primes.length) break;
    primes = applyRowDominance(cloneObj(primes));
    if (!primes.length) break;
    primes = applyColDominance(cloneObj(primes));
    if (!primes.length) break;
  } while (JSON.stringify(primes) !== JSON.stringify(prevPrimes));
  appendStep(
    <EssentialImplicants
      index={varStore.currentStep++}
      essentials={cloneObj(essentials)}
    />
  );
  if (primes.length) {
    const petrickMethodResult = applyPetrickMethod(cloneObj(primes));
    appendStep(
      <PetrickMethod
        index={varStore.currentStep++}
        steps={petrickMethodResult.steps}
        mapping={petrickMethodResult.primesPetrickMapping}
      />
    );
    essentials = petrickMethodResult.essentials.map((x) => essentials.concat(x));
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
