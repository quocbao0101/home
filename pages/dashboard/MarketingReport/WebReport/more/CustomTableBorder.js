import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: theme.spacing(3),
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    borderRadius: 4,
    height: '505px',
    marginBottom: '30px',
  },

  tableName: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1E293B',
    fontFamily: 'Reem Kufi',
  },

  tableRow: {
    '& .MuiTableCell-root': {
      paddingLeft: 0,
    },
    '& .MuiTableCell-head': {
      fontSize: '14px',
      borderBottom: '2px solid #023E8A',
      color: '#1E293B',
      fontFamily: 'Reem Kufi',
      fontWeight: 700,
    },
    '& .MuiTableCell-body': {
      fontSize: '14px',
      borderBottom: '1px solid #E2E8F0',
      color: '#1E293B',
      fontWeight: 400,
    },
  },

  tableCellPadding: {
    padding: '3.2px',
  },
  tableContainer: {
    maxHeight: 440,
    marginTop: '20px',
  },
  textContainer: {
    display: 'block',
    width: 180,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

function CustomTableBorder(props) {
  const {
    data, name, columnNames, padding,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.tableName}>{name}</Typography>
      <TableContainer className={classes.tableContainer}>
        <Table
          stickyHeader
          className={classes.table}
          size="medium"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.tableRow}>
              {columnNames.map((item) => (
                <TableCell align="left">
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {data.map((row) => (
              <TableRow className={classes.tableRow}>
                {row.map((item, index) => (
                  <TableCell
                    component="td"
                    scope="item"
                    className={
                      padding === 'none' ? classes.tableCellPadding : ''
                    }
                  >
                    {Array.isArray(item)
                      ? item.map((element) => (
                        <div>{element}</div>
                      ))
                      : (
                        <div className={index === 0 ? classes.textContainer : ''}>
                          {item}
                        </div>
                      )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

CustomTableBorder.defaultProps = {
  padding: 'normal',
};

CustomTableBorder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  )).isRequired,
  name: PropTypes.string.isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  padding: PropTypes.string,
};

export default CustomTableBorder;
