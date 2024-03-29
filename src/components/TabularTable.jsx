import React from "react";
import Table from "@mui/material/Table";
import Toolbar from "@mui/material/Toolbar";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const TabularTable = ({ idx, rows, primes }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Toolbar>
        <Typography>{idx}. Finding Prime Implicants</Typography>
      </Toolbar>
      <Table>
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
              <TableCell align="center">
                {row.binary}  {primes.includes(row.binary) ? "✹" : "✓"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabularTable;
