import React from "react";
import useStyles from "../styles"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export default function (props) {
  const classes = useStyles();
  let rows = props.rows;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Group</TableCell>
            <TableCell align="center">Decimal</TableCell>
            <TableCell align="center">Binary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.binary}>
              <TableCell align="center">{row.group}</TableCell>
              <TableCell align="center">{row.decimal}</TableCell>
              <TableCell align="center">{row.binary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
