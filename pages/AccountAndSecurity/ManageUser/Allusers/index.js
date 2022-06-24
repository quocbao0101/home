import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Avatar, Divider, Select, TextField,
  FormControl, MenuItem,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import searchIcon from 'assets/icons/searchIcon.png';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {
  fetchAllUserAsync,
} from 'modules/users/actions';
import HeaderContent from 'components/HeaderContent';
import { useInput } from 'hooks/input.hooks';
import filterIcon from 'assets/icons/filterIcon.png';
import { Pagination } from '@material-ui/lab';
import useStyles from './Constants';
import OverviewTable from './OverviewTable';

const theme = createTheme();

export default function Allusers() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [nameField, setNameField] = React.useState('');
  const [sortBy, setSortBy] = React.useState('ASC');
  const dispatch = useDispatch();

  // const filterDataConnector = useSelector((state) => state.sourceConnection.filterConnector);
  // const filterDataStatus = useSelector((state) => state.sourceConnection.filterStatus);
  // const [connectorFilter, setConnectorFilter] = useState('');
  // const [statusFilter, setStatusFilter] = useState('');
  // const [ownedFilter, setOwnedFilter] = useState('');
  // const [nameSearch, setNameSearch] = React.useState('');

  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.fetching);

  const totalElements = useSelector((state) => state.users.totalElements);
  const totalPages = useSelector((state) => state.users.totalPages);

  const getPaginationData = (sortByValue, pageValue, size) => {
    const paginationData = {
      sortBy: sortByValue,
      page: pageValue,
      size,
      filters: {
        id: 0,
        username: '',
        email: '',
        name: '',
        status: '',
        role: '',
      },
    };
    return paginationData;
  };
  useEffect(() => {
    const paginationData = getPaginationData(sortBy, page - 1, pageSize, nameField);
    dispatch(fetchAllUserAsync(paginationData));
  }, []);

  const breadcrumbsList = {
    list: [{ text: 'Account & Security', link: '/home' }],
    active: 'All users',
  };
  const { value: view, onChange: setView } = useInput('');

  const handleAddOrEditUser = () => {
    history.push('/account_security/all_users/new_user');
  };

  const handleFilterButton = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {

  };
  const handleChangePage = (e, value) => {
    const pageValue = value - 1;
    setPage(value);
    const paginationData = getPaginationData(sortBy, pageValue, pageSize, nameField);
    dispatch(fetchAllUserAsync(paginationData));
  };

  const handleChangePageSize = (e) => {
    setPageSize(e.target.value);
    setPage(1);
    const paginationData = getPaginationData(sortBy, 0, e.target.value, nameField);
    dispatch(fetchAllUserAsync(paginationData));
  };

  const handleSortChange = (model) => {
    setSortBy(model[0].sort.toUpperCase());
    setNameField(model[0].field);
    const paginationData = getPaginationData(model[0].sort.toUpperCase(),
      page - 1, pageSize, model[0].field);
    dispatch(fetchAllUserAsync(paginationData));
  };
  // const handleSearch = ((ev) => {
  //   if (ev.key === 'Enter') {
  //     ev.preventDefault();
  //     setPage(1);
  //     const paginationData = getPaginationData(sortBy, 0, pageSize, nameField);
  //     dispatch(getSourceConnection(paginationData));
  //   }
  // });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
          <HeaderContent
            breadcrumbsList={breadcrumbsList}
            title="All the users"
          />
          <div style={{ marginBottom: '1rem', width: '100%' }}>
            <Grid
              container
            >
              <Grid item lg={7}>
                <TextField
                  size="small"
                  // onKeyPress={handleSearch}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  id="outlined-start-adornment"
                  className={classes.textField}
                  placeholder="Search customer"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Avatar src={searchIcon} style={{ width: '24px', height: '24px' }} /></InputAdornment>,
                  }}
                  variant="outlined"
                />
                <span style={{ marginLeft: '1rem', color: '#797979', verticalAlign: 'bottom' }}>
                  {users.length}
                  {' '}
                  customers found
                </span>
              </Grid>
              <Grid item lg={5} style={{ textAlign: 'right' }}>
                <Button
                  variant="outlined"
                  className={classes.filterBtn}
                  onClick={handleFilterButton}
                >
                  <img src={filterIcon} alt="" width={20} height={20} />
                  Filter
                </Button>
                <Popover
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                >
                  <Grid item container style={{ width: 385 }} xs={12}>
                    <Typography className={classes.titleFilter}>Filter option</Typography>
                    <Grid item xs={12} container>
                      <Grid item xs={12}>
                        <Divider />
                        <Typography className={classes.text}>Role</Typography>
                        <Select
                          value={view}
                          onChange={setView}
                          displayEmpty
                          size="small"
                          className={classes.fieldSelect}
                          variant="outlined"
                        />
                        <Typography className={classes.text}>Status</Typography>
                        <Select
                          value={view}
                          onChange={setView}
                          displayEmpty
                          size="small"
                          className={classes.fieldSelect}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <Divider />
                        <div className={classes.groupFilterButton}>
                          <Button
                            variant="outlined"
                            className={classes.filterBtn}
                            onClick={handleFilterButton}
                          >
                            Reset
                          </Button>
                          <Button
                            variant="contained"
                            className={classes.addBtn}
                            style={{ width: '90px' }}
                            onClick={() => { }}
                          >
                            Apply
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Popover>
                <Button
                  variant="contained"
                  className={classes.addBtn}
                  onClick={() => handleAddOrEditUser()}
                >
                  Add new customer
                </Button>
              </Grid>
            </Grid>
          </div>
          <OverviewTable
            data={users}
            sortBy={handleSortChange}
            pageSize={pageSize}
            loading={loading}
            handleDeleteItem={handleDelete}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: '20px' }}
        >
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Typography>Showing</Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={pageSize}
                  onChange={handleChangePageSize}
                  className={classes.select}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
              <Typography>
                of
                {' '}
                {totalElements}
                {' '}
                results
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Pagination
              defaultPage={1}
              count={totalPages}
              page={page}
              showFirstButton
              showLastButton
              shape="rounded"
              className={classes.pagination}
              onChange={handleChangePage}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
