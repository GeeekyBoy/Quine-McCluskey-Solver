import React from "react";
import colsParser from "../utils/colsParser";
import SelectionTable from "../components/SelectionTable";
import { appendStep } from "../components/Result";
import varStore from "../utils/varStore";
export default function (primes) {
  const rows = [];
  const dominatedRowsIndecies = [];
  const dominatedRows = [];
  const prevPrimes = JSON.parse(JSON.stringify(primes));
  for (const item of primes) {
    rows.push(item[0]);
  }
  for (const i of rows) {
    for (const j of rows) {
      if (i !== j) {
        if (
          i.every((val) => j.includes(val)) &&
          i.length < j.length &&
          primes[rows.indexOf(i)][2] >= primes[rows.indexOf(j)][2]
        ) {
          dominatedRowsIndecies.push(rows.indexOf(i));
          dominatedRows.push(primes[rows.indexOf(i)][1]);
        }
      }
    }
  }
  for (const i of dominatedRowsIndecies) {
    primes[i] = null;
  }
  primes = primes.filter((x) => x);
  if (JSON.stringify(prevPrimes) !== JSON.stringify(primes)) {
    appendStep(
      <SelectionTable
        index={varStore.currentStep++}
        availCols={Object.keys(colsParser(prevPrimes))
          .map((x) => parseInt(x, 10))
          .sort()}
        primeImplicants={prevPrimes}
        rowDominance={true}
        stepsData={dominatedRows}
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
