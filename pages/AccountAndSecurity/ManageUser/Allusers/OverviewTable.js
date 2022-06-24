import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  Avatar,
  Button, Grid, IconButton, makeStyles, Typography, Dialog,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import editIcon from 'assets/icons/EditIcon.png';
import trashIcon from 'assets/icons/TrashIcon.png';
import norowsIcon from 'assets/icons/norowIcon.png';
import avacustomer1 from 'assets/images/avacustomer41.png';

const useStyles = makeStyles((theme) => ({
  small: {
    height: 20,
    width: 20,
  },
  dataGridContainer: {
    lineHeight: '20px',
    width: '100%',
    height: '61vh',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    '& .MuiCheckbox-colorPrimary': {
      color: '#0096C7',
    },
    '& .MuiBadge-badge': {
      display: 'none',
    },
    '& .MuiDataGrid-columnSeparator': {
      visibility: 'hidden',
    },
    '& .MuiDataGrid-cell': {
      paddingLeft: '15px',
      paddingRight: '15px',
      '&:focus': {
        outline: 'none',
      },
    },
    '& .MuiDataGrid-cell:focus-within': {
      outline: 'none !important',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize: 14,
      fontWeight: 700,
    },
    '& .MuiDataGrid-window': {
      '&::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'white',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#EBEBEB',
        borderRadius: 10,
      },
    },
  },
  activeStatus: {
    minWidth: 100,
    textTransform: 'capitalize',
    border: '1px solid rgba(0, 150, 199, 0.3)',
    backgroundColor: '#E2F2F9',
    color: '#0096C7',
    padding: 0,
    '&:hover': {
      backgroundColor: '#E2F2F9',
    },
  },
  inactiveStatus: {
    minWidth: 100,
    textTransform: 'capitalize',
    border: '1px solid #D9D6D6',
    backgroundColor: '#F9F7F7',
    padding: 0,
    color: '#A19F9F',
    '&:hover': {
      backgroundColor: '#F9F7F7',
    },
  },

  alertDelete: {
    marginLeft: 70,
    height: 70,
    width: 260,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E2E8F0',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    borderRadius: 4,
    bottom: 50,
  },

  alertText: {
    fontSize: 18,
    fontWeight: 400,
    fontStyle: 'italic',
  },

  deleteBtn: {
    textTransform: 'capitalize',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  cell: {
    marginLeft: theme.spacing(5),
  },
  noRowsOverlay: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  lastLogin: {
    fontSize: 13,
    color: '#8d9199',
  },
}));

export default function OverviewTable({
  data, pageSize, checkBoxSelection, handleDeleteItem, loading,
}) {
  const classes = useStyles();

  const [dialog, setDialog] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState([]);
  const handleClickDialogOpen = (id) => {
    setDialog(true);
    setDeleteId([id]);
  };
  const handleClickDialogClose = () => {
    setDialog(false);
  };
  const handleDeleteById = () => {
    handleDeleteItem(deleteId);
    handleClickDialogClose();
  };
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'name',
      sort: 'asc',
    },
    {
      field: 'status',
      sort: 'asc',
    },
    {
      field: 'role',
      sort: 'asc',
    },
  ]);

  const NoRowsOverlay = () => (
    <div
      className={classes.noRowsOverlay}
    >
      <Grid item>
        <img src={norowsIcon} alt="" />
      </Grid>
      <Grid item>
        <Typography style={{ color: '#797979', marginTop: '20px' }}>
          You have not connected to any data source yet.
        </Typography>
      </Grid>
    </div>
  );

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: 'contents' }}>
          <Avatar src={avacustomer1}> </Avatar>
          <div style={{ lineHeight: 'initial', marginLeft: '0.5rem' }}>
            {params.row.name}
            <br />
            {params.row.email}
          </div>
        </div>
      ),
      width: 250,
      sortable: true,
      filterable: true,
    },
    {
      field: 'role',
      headerName: 'Role',
      renderCell: (params) => (
        <div style={{ display: 'contents' }}>
          <div>
            {params.row.role}
          </div>
        </div>
      ),
      width: 250,
      flex: 1,
      sortable: true,
      filterable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      flex: 1,
      editable: false,
      renderCell: (params) => (
        <div style={{ lineHeight: 'initial', marginLeft: '0.5rem' }}>
          <Button
            variant="outlined"
            className={
              (params.row.status === 'active' ? classes.activeStatus : classes.inactiveStatus)
            }
          >
            {params.row.status}
          </Button>
          <br />
          <span className={classes.lastLogin}>Last Login:</span>
        </div>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 160,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Grid container direction="row" justifyContent="center">
          <IconButton style={{ color: '#0096C7' }}>
            <Avatar
              variant="rounded"
              src={editIcon}
              alt=""
              className={classes.small}
            />
          </IconButton>
          <IconButton style={{ color: '#F43F5E' }} onClick={() => handleClickDialogOpen(params.row.id)}>
            <Avatar
              variant="rounded"
              src={trashIcon}
              alt=""
              className={classes.small}
            />
          </IconButton>
        </Grid>
      ),
    },
  ];
  return (
    <div className={classes.dataGridContainer}>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        pageSize={pageSize}
        disableSelectionOnClick
        hideFooterPagination
        hideFooter
        disableColumnMenu
        checkboxSelection={checkBoxSelection}
        components={{ NoRowsOverlay }}
        sortModel={sortModel}
        onSortModelChange={() => {
          setSortModel();
        }}
      />
      <Dialog
        open={dialog}
        onClose={handleClickDialogClose}
      >
        <div className={classes.container}>
          <div className={classes.content}>
            <Typography className={classes.title}>Are you sure?</Typography>
            <div className={classes.btnGroup}>
              <Button
                variant="contained"
                className={classes.addBtn}
                onClick={handleDeleteById}
              >
                DELETE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
OverviewTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
      membership: PropTypes.string,
      location: PropTypes.string,
      Email: PropTypes.string,
      phone: PropTypes.string,
    }),
  ).isRequired,
  checkBoxSelection: PropTypes.bool,
  pageSize: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

OverviewTable.defaultProps = {
  checkBoxSelection: true,
};
