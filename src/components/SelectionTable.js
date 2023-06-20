import React from "react";
import globalStyles from "../styles";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";

export default function (props) {
  const title = () => {
    if (props.extractSingles) {
      return "Finding Unique Minterms";
    } else if (props.columnDominance) {
      return "Applying Column Dominance";
    } else if (props.rowDominance) {
      return "Applying Row Dominance";
    } else {
      return "Prime Implicants Chart";
    }
  };
  return (
    <TableContainer component={Paper} className={globalStyles.table}>
      <Toolbar>
        <Typography>{`${props.index}. ${title()}`}</Typography>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Minterms</TableCell>
            {props.availCols.map((availCol) => {
              if (
                (props.extractSingles &&
                  props.stepsData[1].includes(availCol)) ||
                (props.columnDominance && props.stepsData.includes(availCol))
              ) {
                return (
                  <TableCell align="center" className={globalStyles.cancelled}>
                    {availCol}
                  </TableCell>
                );
              } else {
                return <TableCell align="center">{availCol}</TableCell>;
              }
            })}
            <TableCell align="center">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.primeImplicants.map((primeImplicant) => (
            <TableRow key={primeImplicant[1]}>
              {(() => {
                if (
                  (props.extractSingles &&
                    props.stepsData[2].includes(primeImplicant[1])) ||
                  (props.rowDominance &&
                    props.stepsData.includes(primeImplicant[1]))
                ) {
                  return (
                    <TableCell align="center" className={globalStyles.cancelled}>
                      {primeImplicant[1]}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell align="center">{primeImplicant[1]}</TableCell>
                  );
                }
              })()}
              {props.availCols.map((availCol) => {
                if (props.extractSingles) {
                  if (props.stepsData[1].includes(availCol)) {
                    return (
                      <TableCell
                        align="center"
                        className={`${globalStyles.cancelled} ${
                          primeImplicant[0].includes(availCol)
                            ? globalStyles.dashedBorder
                            : null
                        }
												${
                          primeImplicant[0].includes(availCol) &&
                          props.stepsData[2].includes(primeImplicant[1])
                            ? globalStyles.redBorder
                            : null
                        }`}
                      >
                        {primeImplicant[0].includes(availCol) ? "X" : ""}
                      </TableCell>
                    );
                  } else if (
                    props.stepsData[0].includes(availCol) &&
                    props.stepsData[2].includes(primeImplicant[1]) &&
                    primeImplicant[0].includes(availCol)
                  ) {
                    return (
                      <TableCell
                        align="center"
                        className={`${globalStyles.cancelled} ${globalStyles.dashedBorder} ${globalStyles.redBorder}`}
                      >
                        <Typography className={globalStyles.single}>X</Typography>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        align="center"
                        className={
                          props.stepsData[2].includes(primeImplicant[1])
                            ? globalStyles.cancelled
                            : null
                        }
                      >
                        {primeImplicant[0].includes(availCol) ? "X" : ""}
                      </TableCell>
                    );
                  }
                } else if (
                  (props.rowDominance &&
                    props.stepsData.includes(primeImplicant[1])) ||
                  (props.columnDominance && props.stepsData.includes(availCol))
                ) {
                  return (
                    <TableCell align="center" className={globalStyles.cancelled}>
                      {primeImplicant[0].includes(availCol) ? "X" : ""}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell align="center">
                      {primeImplicant[0].includes(availCol) ? "X" : ""}
                    </TableCell>
                  );
                }
              })}
              <TableCell align="center">{primeImplicant[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
