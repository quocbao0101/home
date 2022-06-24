import {
  InputAdornment, Grid, makeStyles, TextField, Typography, Checkbox, Button,
} from '@material-ui/core';
import HeaderContent from 'components/HeaderContent';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import colors from 'constants/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: colors.white,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    borderRadius: '4px',
  },
  header: {
    fontSize: '32px',
    fontWeight: 700,
    color: colors.mainText,
  },
  textField: {
    width: '100%',
    height: 40,
    background: colors.white,
    color: '#1565D8',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.primary,
    },
  },
  text: {
    marginLeft: 10,
    fontSize: '14px',
    fontWeight: 400,
    color: '#000000',
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    color: colors.mainText,
  },
  btn: {
    margin: theme.spacing(3),
  },
  saveBtn: {
    width: 125,
    height: 40,
    marginLeft: theme.spacing(2),
    color: colors.white,
    textTransform: 'none',
    fontWeight: 500,
    backgroundColor: colors.primary,
    '&:hover': {
      backgroundColor: '#0077B6',
    },
  },
  cancelBtn: {
    width: 130,
    height: 40,
    marginLeft: theme.spacing(2),
    color: colors.primary,
    textTransform: 'none',
    fontWeight: 500,
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.white,
    },
  },

  formContainer: {
    marginTop: '20px',
    marginLeft: '20px',
  },
  form: {
    marginTop: '30px',
    marginLeft: '20px',
  },

  field: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#475569',
  },
  checkboxStyle: {
    color: colors.primary,
  },

}));

function AddNewRole() {
  const classes = useStyles();
  const history = useHistory();
  // const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);

  //   const dispatch = useDispatch();
  const [RoleList, setRoleList] = React.useState([
    {
      name: 'Source Connection',
      checkboxList: [
        {
          checkboxName: 'View list source',
          value: false,
        },
        {
          checkboxName: 'Add new source',
          value: false,
        },
        {
          checkboxName: 'Remove source',
          value: false,
        },
      ],
    },
    {
      name: 'General Information',
      checkboxList: [
        {
          checkboxName: 'View dashboard',
          value: false,
        },
        {
          checkboxName: 'Edit dashboard',
          value: false,
        },
        {
          checkboxName: 'View general information statistics',
          value: false,
        },
      ],
    },
    {
      name: 'Tracking Behavior',
      checkboxList: [
        {
          checkboxName: 'View costomer behavior',
          value: false,
        },
        {
          checkboxName: 'Vew search engine & customer services',
          value: false,
        },
      ],
    },
    {
      name: 'Marketing Report',
      checkboxList: [
        {
          checkboxName: 'Marketing report overview',
          value: false,
        },
        {
          checkboxName: 'View website report',
          value: false,
        },
        {
          checkboxName: 'View Facebook report',
          value: false,
        },
        {
          checkboxName: 'View Instagram report',
          value: false,
        },
      ],
    },
    {
      name: 'Customer Profile',
      checkboxList: [
        {
          checkboxName: 'View customer statistics',
          value: false,
        },
        {
          checkboxName: 'View list customer',
          value: false,
        },
        {
          checkboxName: 'View profile customer',
          value: false,
        },
        {
          checkboxName: 'Edit profile customer',
          value: false,
        },
        {
          checkboxName: 'Delete profile customer',
          value: false,
        },
      ],
    },
    {
      name: 'Manage User',
      checkboxList: [
        {
          checkboxName: 'View list user',
          value: false,
        },
        {
          checkboxName: 'View profile user',
          value: false,
        },
        {
          checkboxName: 'Edit profile user',
          value: false,
        },
        {
          checkboxName: 'Delete profile user',
          value: false,
        },
        {
          checkboxName: 'Active user',
          value: false,
        },
      ],
    },
    {
      name: 'Role & Permission',
      checkboxList: [
        {
          checkboxName: 'View list role',
          value: false,
        },
        {
          checkboxName: 'Change role',
          value: false,
        },
      ],
    },
  ]);

  const breadcrumbsList = {
    list: [
      { text: 'Account & Security', link: '/account_security/all_users' },
      { text: 'Role & Permission', link: '/account_security/role_permission' },
    ],
    active: 'Add New Role',
  };
  const breadcrumbsList1 = {
    list: [
      { text: 'Account & Security', link: '/account_security/all_users' },
      { text: 'Role & Permission', link: '/account_security/role_permission' },
    ],
    active: 'Edit Role',
  };

  const handleRedirect = (uri) => {
    history.push(uri);
  };

  const onChangeCheckbox = (event, roleName) => {
    const newRoleList = [...RoleList];
    newRoleList.forEach((role) => {
      if (role.name === roleName) {
        role.checkboxList.forEach((item) => {
          if (item.checkboxName === event.target.name) {
            const newItem = item;
            newItem.value = event.target.checked;
          }
        });
      }
    });
    setRoleList(newRoleList);
  };

  const onSubmit = () => {
    console.log(RoleList);
  };
  const params = useParams();
  const value = params.id;
  return (
    <div>
      <HeaderContent
        breadcrumbsList={!value ? breadcrumbsList : breadcrumbsList1}
        title={!value ? 'Add New Role' : 'Edit Role'}
        className={classes.header}
      />
      <Grid container className={classes.container}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginTop: '10px' }}
        >
          <Grid item sm={3} md={3} lg={3} className={classes.formContainer}>
            <Typography gutterBottom className={classes.field}>Role</Typography>
            <TextField
              size="small"
              id="outlined-start-adornment"
              className={classes.textField}
              placeholder="ex: Admin"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" />
                ),
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          sm={12}
          md={12}
          lg={12}
          className={classes.form}
        >
          {
            RoleList.map((role) => (
              <Grid item sm={3} md={3} lg={3} key={role.name}>
                <Typography className={classes.title}>{role.name}</Typography>
                <FormGroup>
                  {role.checkboxList.map((checkbox) => (
                    <FormControlLabel
                      key={checkbox.checkboxName}
                      control={(
                        <Checkbox
                          name={checkbox.checkboxName}
                          checked={checkbox.value}
                          onChange={(e) => onChangeCheckbox(e, role.name)}
                          className={classes.checkboxStyle}
                          color={colors.primary}
                        />
                    )}
                      label={checkbox.checkboxName}
                      className={classes.text}
                    />
                  ))}
                </FormGroup>
              </Grid>
            ))
          }
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className={classes.btn}
        >
          <Button
            variant="contained"
            className={classes.cancelBtn}
            onClick={() => handleRedirect('/account_security/role_permission')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            // onClick={submit}
            // disabled={isSubmit}
            variant="contained"
            className={classes.saveBtn}
            onClick={onSubmit}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddNewRole;
