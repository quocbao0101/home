import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  InputAdornment,
  TextField,
  Avatar,
  Button,
  makeStyles,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
// import { useInput } from 'hooks/input.hooks';
import Pagination from '@material-ui/lab/Pagination';
import searchIcon from 'assets/icons/searchIcon.png';
// import Popover from '@material-ui/core/Popover';
import OverviewTable from 'pages/AccountAndSecurity/RolePermission/RoleList/OverviewTable';
import HeaderContent from 'components/HeaderContent';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 500,
    background: '#FFFFFFCC',
    padding: theme.spacing(2),
    '& .MuiCard-root': {
      ShadowRoot: 2,
    },
  },
  textField: {
    width: '100%',
    height: 40,
    background: 'white',
    color: '#1565D8',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0096C7',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0096C7',
    },
  },
  select: {
    margin: '0px 10px',
    '& .MuiOutlinedInput-input': {
      padding: '5px 30px 5px 10px',
    },
  },
  List: {
    paddingLeft: theme.spacing(3),
  },
  addBtn: {
    width: 157,
    height: 40,
    marginLeft: theme.spacing(2),
    color: 'white',
    textTransform: 'none',
    fontWeight: 500,
    backgroundColor: '#0096C7',
    '&:hover': {
      backgroundColor: '#0077B6',
    },
  },
  pagination: {
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: 'white',
      border: '1px solid #E2E8F0',
      color: '#0096C7',
    },
  },
}));

const rows = [
  {
    id: 1,
    role: 'Admin',
  },
  {
    id: 2,
    role: 'Marketer',
  },
  {
    id: 3,
    role: 'Staff',
  },
];

export default function RoleList() {
  const classes = useStyles();
  const history = useHistory();
  const [pageSize, setPageSize] = React.useState(10);
  const handleChangePageSize = (event) => {
    setPageSize(event.target.value);
  };

  const breadcrumbsList = {
    list: [{ text: 'Account & Security', link: '/account_security/all_users' }],
    active: 'Role & Permission',
  };
  const handleRedirect = (uri) => {
    history.push(uri);
  };
  return (
    <div>
      <HeaderContent
        breadcrumbsList={breadcrumbsList}
        title="Role & Permission"
      />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{ marginTop: '10px' }}
      >
        <Grid item sm={4} md={4} lg={4}>
          <TextField
            size="small"
            id="outlined-start-adornment"
            className={classes.textField}
            placeholder="Search data source"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Avatar
                    src={searchIcon}
                    style={{ width: '24px', height: '24px' }}
                  />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid>
        <Button
          variant="contained"
          className={classes.addBtn}
          onClick={() => handleRedirect('/account_security/role_permission/new_role')}
        >
          Add new Role
        </Button>
      </Grid>
      <Grid container style={{ marginTop: '20px' }}>
        <OverviewTable data={rows} pageSize={5} />
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
              {rows.length}
              {' '}
              results
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Pagination
            defaultPage={1}
            showFirstButton
            showLastButton
            shape="rounded"
            className={classes.pagination}
            boundaryCount={1}
          />
        </Grid>
      </Grid>
    </div>
  );
}
