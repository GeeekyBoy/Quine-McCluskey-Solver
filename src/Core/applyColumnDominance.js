import React from "react";
import SelectionTable from "../components/SelectionTable";
import colsParser from "../utils/colsParser";
import { appendStep } from "../components/Result";
import varStore from "../utils/varStore";
export default function (primes) {
  const colImplicants = [];
  let dominatingCols = [];
  const prevPrimes = JSON.parse(JSON.stringify(primes));
  for (const i of [...Array(primes.length).keys()]) {
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
  for (const i of [...Array(primes.length).keys()]) {
    primes[i][0] = primes[i][0].filter((x) => !dominatingCols.includes(x));
  }
  if (JSON.stringify(prevPrimes) !== JSON.stringify(primes)) {
    appendStep(
      <SelectionTable
        index={varStore.currentStep++}
        availCols={Object.keys(colsParser(prevPrimes))
          .map((x) => parseInt(x, 10))
          .sort()}
        primeImplicants={prevPrimes}
        columnDominance={true}
        stepsData={dominatingCols}
      />
    );
    if (primes.length > 0) {
      appendStep(
        <SelectionTable
          index={varStore.currentStep++}
          availCols={Object.keys(colsParser(primes))
            .map((x) => parseInt(x, 10))
            .sort()}
          primeImplicants={primes}
        />
      );
    }
  }
  return primes;
}
