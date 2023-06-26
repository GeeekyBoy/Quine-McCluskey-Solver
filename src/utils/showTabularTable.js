export default function (minterms, primes) {
  const steps = [];
  const createData = (group, decimal, binary) => {
    return { group, decimal, binary };
  };
  const rows = [];
  for (const mintermsGroup of minterms) {
    for (const minterm of mintermsGroup) {
      rows.push(
        createData(
          minterms.indexOf(mintermsGroup),
          minterm[0].join(", "),
          minterm[1]
        )
      );
    }
  }
  steps.push({
    type: "tabularTable",
    rows: rows,
    primes: primes
  });
  return steps;
}
