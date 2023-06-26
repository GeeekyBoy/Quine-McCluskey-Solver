import React from "react";
import cloneObj from "../utils/cloneObj";
import parseCols from "../utils/parseCols";
import SelectionTable from "../components/SelectionTable";
import { appendStep } from "../components/Result";
import varStore from "../utils/varStore";

export default function (primes) {
  const rows = primes.map((x) => x[0]);
  const dominatedRowsIdx = [];
  const dominatedRows = [];
  const prevPrimes = cloneObj(primes);
  for (const i of rows) {
    for (const j of rows) {
      if (i !== j) {
        if (
          i.every((val) => j.includes(val)) &&
          i.length < j.length &&
          primes[rows.indexOf(i)][2] >= primes[rows.indexOf(j)][2]
        ) {
          dominatedRowsIdx.push(rows.indexOf(i));
          dominatedRows.push(primes[rows.indexOf(i)][1]);
        }
      }
    }
  }
  for (const i of dominatedRowsIdx) {
    primes[i] = null;
  }
  primes = primes.filter((x) => x);
  if (JSON.stringify(prevPrimes) !== JSON.stringify(primes)) {
    appendStep(
      <SelectionTable
        index={varStore.currentStep++}
        availCols={Object.keys(parseCols(prevPrimes))
          .map((x) => parseInt(x, 10))
          .sort()}
        primeImplicants={prevPrimes}
        rowDominance={true}
        steps={dominatedRows}
      />
    );
    if (primes.length > 0) {
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
