import React from "react";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";

const SelectionTable = ({
  idx,
  extractSingles,
  colDominance,
  rowDominance,
  steps,
  availCols,
  primeImplicants
}) => {
  return (
    <TableContainer component={Paper} className="table">
      <Toolbar>
        <Typography>
          {idx}. {
            extractSingles ? "Finding Unique Minterms" :
            colDominance ? "Applying Column Dominance" :
            rowDominance ? "Applying Row Dominance" :
            "Prime Implicants Chart"
          }
        </Typography>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Minterms</TableCell>
            {availCols.map((availCol, i) => (
              (
                (extractSingles && steps[1].includes(availCol)) ||
                (colDominance && steps.includes(availCol))
              ) ? (
                <TableCell key={i} align="center" className="cancelled">
                  {availCol}
                </TableCell>
              ) : (
                <TableCell key={i} align="center">{availCol}</TableCell>
              )
            ))}
            <TableCell align="center">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {primeImplicants.map((primeImplicant, i) => (
            <TableRow key={primeImplicant[1]}>
              {
                (
                  (extractSingles && steps[2].includes(primeImplicant[1])) ||
                  (rowDominance && steps.includes(primeImplicant[1]))
                ) ? (
                  <TableCell key={i} align="center" className="cancelled">
                    {primeImplicant[1]}
                  </TableCell>
                ) : (
                  <TableCell key={i} align="center">{primeImplicant[1]}</TableCell>
                )
              }
              {availCols.map((availCol, i) => {
                if (extractSingles) {
                  if (steps[1].includes(availCol)) {
                    return (
                      <TableCell
                        key={i}
                        align="center"
                        className={`cancelled ${
                          primeImplicant[0].includes(availCol)
                            ? "dashed-border"
                            : null
                        } ${
                          primeImplicant[0].includes(availCol) &&
                          steps[2].includes(primeImplicant[1])
                            ? "red-border"
                            : null
                        }`}
                      >
                        {primeImplicant[0].includes(availCol) && "X"}
                      </TableCell>
                    );
                  } else if (
                    steps[0].includes(availCol) &&
                    steps[2].includes(primeImplicant[1]) &&
                    primeImplicant[0].includes(availCol)
                  ) {
                    return (
                      <TableCell key={i} align="center" className="cancelled dashed-border red-border">
                        <Typography className="single">X</Typography>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        key={i}
                        align="center"
                        className={
                          steps[2].includes(primeImplicant[1])
                            ? "cancelled"
                            : null
                        }
                      >
                        {primeImplicant[0].includes(availCol) && "X"}
                      </TableCell>
                    );
                  }
                } else if (
                  (rowDominance && steps.includes(primeImplicant[1])) ||
                  (colDominance && steps.includes(availCol))
                ) {
                  return (
                    <TableCell key={i} align="center" className="cancelled">
                      {primeImplicant[0].includes(availCol) && "X"}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell key={i} align="center">
                      {primeImplicant[0].includes(availCol) && "X"}
                    </TableCell>
                  );
                }
              })}
              <TableCell key={`${i}-1`} align="center">{primeImplicant[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SelectionTable;
