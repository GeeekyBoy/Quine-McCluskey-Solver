import React from "react";
import SelectionTable from "../Components/SelectionTable";
import colsParser from "../Utils/colsParser";
import { appendStep } from "../Components/Result";
import varStore from "../Utils/varStore";
export default function (primes) {
  const essentials = [];
  const tableData = [[], [], []];
  const prevPrimes = JSON.parse(JSON.stringify(primes));
  for (const i of [...Array(primes.length).keys()]) {
    const notSingle = [];
    for (const j of [...Array(primes.length).keys()]) {
      if (i !== j && primes[j]) {
        for (const item of primes[i][0]) {
          if (primes[j][0].includes(item) && !notSingle.includes(item)) {
            notSingle.push(item);
          }
        }
      }
    }
    if (notSingle.length < primes[i][0].length) {
      const single = primes[i][0].filter((x) => !notSingle.includes(x));
      tableData[0] = [...new Set(tableData[0].concat(single))];
      tableData[1] = [...new Set(tableData[1].concat(notSingle))];
      tableData[2].push(primes[i][1]);
      essentials.push(primes[i][1]);
      for (const j of [...Array(primes.length).keys()]) {
        if (i !== j && primes[j]) {
          primes[j][0] = primes[j][0].filter((x) => !primes[i][0].includes(x));
        }
      }
      primes[i] = null;
    }
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
        extractSingles={true}
        stepsData={tableData}
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
  return {
    primes,
    essentials
  };
}
