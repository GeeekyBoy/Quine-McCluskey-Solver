import React from "react";
import SelectionTable from "../components/SelectionTable";
import cloneObj from "../utils/cloneObj";
import parseCols from "../utils/parseCols";
import { appendStep } from "../components/Result";
import varStore from "../utils/varStore";

export default function (primes) {
  const colImplicants = [];
  let dominatingCols = [];
  const prevPrimes = cloneObj(primes);
  for (const i of Array(primes.length).keys()) {
    for (const item of primes[i][0]) {
      if (!colImplicants[item]) {
        colImplicants[item] = [];
      }
      colImplicants[item].push(primes[i][1]);
    }
  }
  for (const i of colImplicants) {
    for (const j of colImplicants) {
      if (i !== j && i && j) {
        if (i.every((val) => j.includes(val)) && i.length < j.length) {
          dominatingCols.push(colImplicants.indexOf(j));
        }
      }
    }
  }
  dominatingCols = [...new Set(dominatingCols)].sort();
  for (const i of Array(primes.length).keys()) {
    primes[i][0] = primes[i][0].filter((x) => !dominatingCols.includes(x));
  }
  if (JSON.stringify(prevPrimes) !== JSON.stringify(primes)) {
    appendStep(
      <SelectionTable
        index={varStore.currentStep++}
        availCols={Object.keys(parseCols(prevPrimes))
          .map((x) => parseInt(x, 10))
          .sort()}
        primeImplicants={prevPrimes}
        colDominance={true}
        steps={dominatingCols}
      />
    );
    if (primes.length) {
      appendStep(
        <SelectionTable
          index={varStore.currentStep++}
          availCols={Object.keys(parseCols(primes))
            .map((x) => parseInt(x, 10))
            .sort()}
          primeImplicants={primes}
        />
      );
    }
  }
  return primes;
}
