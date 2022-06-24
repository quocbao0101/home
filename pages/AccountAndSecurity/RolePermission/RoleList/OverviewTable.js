import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  Avatar,
  Button, Grid, IconButton, makeStyles, Snackbar, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import editIcon from 'assets/icons/EditIcon.png';
import trashIcon from 'assets/icons/TrashIcon.png';
import norowsIcon from 'assets/icons/norowIcon.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  small: {
    height: 20,
    width: 20,
  },

  dataGridContainer: {
    width: '100%',
    height: '300px',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    backgroundColor: '#F7F9FA',
    '& .MuiCheckbox-colorPrimary': {
      color: '#0096C7',
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
}));

export default function OverviewTable({ data, pageSize, checkBoxSelection }) {
  const classes = useStyles();
  const [deleteItems, setDeleteItems] = React.useState([]);
  const [openDelete, setOpenDelete] = React.useState(false);
  const history = useHistory();
  const handleDeleteItems = () => {
    setOpenDelete(false);
  };
  const handleRedirect = (uri) => {
    history.push(uri);
  };

  React.useEffect(() => {
    if (deleteItems.length > 0) {
      setOpenDelete(true);
    } else {
      setOpenDelete(false);
    }
  }, [deleteItems]);

  const NoRowsOverlay = () => (
    <div
      container
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
      field: 'role',
      headerName: 'Role',
      cellClassName: 'cell',
      width: 1140,
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 160,
      headerAlign: 'center',
      align: 'center',
      renderCell: () => (
        <Grid container direction="row" justifyContent="center">
          <IconButton style={{ color: '#0096C7' }} onClick={() => handleRedirect('/account_security/role_permission/edit_role/:id')}>
            <Avatar variant="rounded" src={editIcon} alt="" className={classes.small} />
          </IconButton>
          <IconButton style={{ color: '#F43F5E' }}>
            <Avatar variant="rounded" src={trashIcon} alt="" className={classes.small} />
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
        pageSize={pageSize}
        disableSelectionOnClick
        hideFooterPagination
        hideFooter
        disableColumnMenu
        checkboxSelection={checkBoxSelection}
        components={{ NoRowsOverlay }}
        onSelectionModelChange={(ids) => {
          setDeleteItems(ids);
        }}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openDelete}
      >
        <div className={classes.alertDelete}>
          <Typography className={classes.alertText}>
            {deleteItems.length}
            {' '}
            item selected
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDeleteItems}
            className={classes.deleteBtn}
          >
            Delete
          </Button>
        </div>
      </Snackbar>
    </div>
  );
}
OverviewTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      role: PropTypes.string,
    }),
  ).isRequired,
  checkBoxSelection: PropTypes.bool,
  pageSize: PropTypes.number.isRequired,
};

OverviewTable.defaultProps = {
  checkBoxSelection: true,
};
