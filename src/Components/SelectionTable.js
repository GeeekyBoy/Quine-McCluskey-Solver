import React from "react";
import useStyles from "../styles";
import { makeStyles } from "@material-ui/core/styles";
import numberToImage from "../Utils/numberToImg";
import Table from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export default function (props) {
  const useAditionalStyles = makeStyles({
    BG: { background: `#D7EFFE url(${numberToImage(props.index.toString())})` },
    cancelledBG: {
      background: `#073042 url(${numberToImage(props.index.toString())})`
    }
  });
  const classes = useStyles();
  const additionalClasses = useAditionalStyles();
  return (
    <TableContainer component={Paper}>
      <Table
        className={`${classes.table} ${classes.numberedBG} ${additionalClasses.BG}`}
      >
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
                  <TableCell align="center" className={classes.cancelled}>
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
                    <TableCell
                      align="center"
                      className={`${classes.cancelled} ${
                        primeImplicant[1] ===
                        props.primeImplicants[
                          props.primeImplicants.length - 1
                        ][1]
                          ? `${classes.numberedBG} ${additionalClasses.cancelledBG}`
                          : null
                      }`}
                    >
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
                        className={`${classes.cancelled} ${
                          primeImplicant[0].includes(availCol)
                            ? classes.dashedBorder
                            : null
                        }
												${
                          primeImplicant[0].includes(availCol) &&
                          props.stepsData[2].includes(primeImplicant[1])
                            ? classes.redBorder
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
                        className={`${classes.cancelled} ${classes.dashedBorder} ${classes.redBorder}`}
                      >
                        <Typography variant="body" className={classes.single}>
                          X
                        </Typography>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        align="center"
                        className={
                          props.stepsData[2].includes(primeImplicant[1])
                            ? classes.cancelled
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
                  <TableCell align="center" className={classes.cancelled}>
                    {primeImplicant[0].includes(availCol) ? "X" : ""}
                  </TableCell>;
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
