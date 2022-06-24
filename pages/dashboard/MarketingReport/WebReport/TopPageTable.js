import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  textContainer: {
    display: 'block',
    width: 180,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  root: {
    '& .MuiTableCell-root': {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 0,
    },
    '& .MuiTableCell-head': {
      borderBottom: '3px solid #023E8A',
      color: '#1E293B',
      fontSize: 14,
      fontWeight: 700,
    },
    '& .MuiTableCell-body': {
      color: '#1E293B',
      fontSize: 14,
      fontWeight: 400,
      borderBottom: '1px solid #E2E8F0',
    },
  },
});

function createData(id, pagepath, sessions, views, users) {
  return {
    id, pagepath, sessions, views, users,
  };
}

const rows = [
  createData(1, './page/path-1', 159, 60, 240),
  createData(2, './page/path-2', 237, 90, 370),
  createData(3, './page/path-3', 262, 162, 240),
  createData(4, './page/path-4', 305, 600, 673),
  createData(5, './page/path-5', 356, 160, 495),
];

export default function TopPageTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.root}>
            <TableCell className={classes.tableCell}>Page path</TableCell>
            <TableCell>Sessions</TableCell>
            <TableCell>Views</TableCell>
            <TableCell>Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className={classes.root}>
              <TableCell component="th" scope="row">
                <div className={classes.textContainer}>
                  {row.pagepath}
                </div>
              </TableCell>
              <TableCell>
                {row.sessions}
              </TableCell>
              <TableCell>
                {row.views}
              </TableCell>
              <TableCell>
                {row.users}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
