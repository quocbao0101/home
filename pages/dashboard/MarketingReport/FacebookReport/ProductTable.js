import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    '& .MuiTableCell-head': {
      borderBottom: '2px solid #588df7',
      color: '#566d8b',
      fontSize: 17,
      fontWeight: 700,
    },
    '& .MuiTableCell-body': {
      color: '#566d8b',
      fontSize: 16,
      fontWeight: 700,
    },
  },
});

function createData(name, ctr, cpc, totalspent, leadconversion, leadform) {
  return {
    name, ctr, cpc, totalspent, leadconversion, leadform,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4, 1),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 13),
  createData('Eclair', 262, 16.0, 24, 6.0, 12),
  createData('Cupcake', 305, 3.7, 67, 4.3, 10),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 15),
];

export default function ProductTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.root}>
            <TableCell>Adset Name</TableCell>
            <TableCell>CTR&nbsp;(all)</TableCell>
            <TableCell>CPC&nbsp;(all)</TableCell>
            <TableCell>Total Spent</TableCell>
            <TableCell>Lead conversion</TableCell>
            <TableCell>Lead (Form)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.root}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                {row.ctr}
                %
              </TableCell>
              <TableCell>
                $&nbsp;
                {row.cpc}
              </TableCell>
              <TableCell>
                $&nbsp;
                {row.totalspent}
              </TableCell>
              <TableCell>{row.leadconversion}</TableCell>
              <TableCell>{row.leadform}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
