import React from "react";
import TabularTable from "../Components/TabularTable";
import { appendStep } from "../Components/Result";
export default function (minterms) {
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
  appendStep(<TabularTable rows={rows} />);
}
