import {
  Avatar,
  Box,
  Button, Card, Checkbox, Divider, FormControl, FormControlLabel,
  FormGroup, Grid, ListItemText, makeStyles,
  MenuItem, Paper, Select, TextField, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
// import usersService from 'services/usersService';
// import { useDispatch } from 'react-redux';
// import { getUserByIdAsync, UpdateUser } from 'modules/users/actions';
import HeaderContent from 'components/HeaderContent';
import image from 'assets/icons/adduser.png';
import edit from 'assets/icons/edit.svg';
import { useParams } from 'react-router-dom';
import validateEmail from 'utils/ValidateEmail';
import { BAD_REQUEST } from 'constants';
import { useAvatar, useCheckbox, useInput } from 'hooks/input.hooks';
import { Alert } from 'bootstrap';
import colors from 'constants/colors';

const useStyles = makeStyles((theme) => ({
  btn: {
    fontWeight: 900,
    padding: '10px 30px',
    borderRadius: '15px',
    minWidth: '100px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      minWidth: '80px',
    },
  },

  formControl: {
    width: '100%',
    height: '40px',
  },

  brand: {
    marginTop: '40px',
    color: '#1565D8',
    fontSize: '20px',
    fontWeight: '700',
  },

  formContainer: {
    display: 'flex',
  },

  avatarContainer: {
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  frame: {
    width: '325px',
    height: '247px',
    borderRadius: '27px',
    '&>img': {
      width: '325px',
      height: '247px',
      objectFit: 'cover',
    },

    overflow: 'hidden',
  },

  buttonChangeAvatar: {
    position: 'relative',
    marginBottom: theme.spacing(3),
  },

  chooseFileBtn: {
    color: '#0096C7',
    fontWeight: 400,
    fontSize: 14,
    position: 'relative',
    top: -60,
    left: '40%',
    cursor: 'pointer',
  },

  fileInput: {
    transform: 'scale(3)',
    position: 'absolute',
    opacity: 0,
  },

  BtnControl: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  field: {
    margin: theme.spacing(2),
  },
  fieldSelect: {
    height: 40,
    width: '100%',
    fontSize: 14,
    fontWeight: 400,
    color: '#1E293B',
    fontFamily: 'Inter',
    background: 'white',
    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
    '& .MuiOutlinedInput-input': {
      padding: '9px 10px',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
  },
  Cardcontent: {
    borderRadius: 4,
    padding: theme.spacing(1, 2, 4, 2),
    marginTop: theme.spacing(1),
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  cardProduct: {
    boxShadow: 'none',
    background: 'url(.png)',
    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))',
  },
  Btnprofile: {
    maxWidth: 300,
    padding: theme.spacing(1, 4),
    marginLeft: theme.spacing(2),
    color: 'white',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 14,
    backgroundColor: '#0096C7',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#0077B6',
    },
  },
  Btnprofilepassword: {
    maxWidth: 300,
    padding: theme.spacing(1, 4),
    marginLeft: theme.spacing(2),
    color: '#0077B6',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 14,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: '1px solid #E2E8F0',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  fieldText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: 500,
    fontfamily: 'Inter',
  },
  checkboxStyle: {
    color: colors.primary,
  },
  forms: {
    marginTop: '30px',
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    color: colors.mainText,
  },
  text: {
    marginLeft: 10,
    fontSize: '14px',
    fontWeight: 400,
    color: '#000000',
  },
  titlecardcontent: {
    fontSize: 18,
    color: '#1E293B',
    fontWeight: 700,
    margin: theme.spacing(1, 0, 1, 0),
  },
  titlecardcontentrole: {
    fontSize: 12,
    color: '#797979',
    fontWeight: 400,
    margin: theme.spacing(1, 0, 1, 0),
  },
  titlecardicon: {
    width: '70px',
    margin: theme.spacing(1, 0, 1, 0),
    color: '#797979',
  },
}));

function AddUser() {
  const classes = useStyles();
  // const history = useHistory();
  // const dispatch = useDispatch();
  const roles = [
    {
      label: 'Marketer',
      value: 'ROLE_MAKETER',
    },
    {
      label: 'Admin',
      value: 'ROLE_ADMIN',
    },
    {
      label: 'Editor',
      value: 'ROLE_EDITOR',
    },
    {
      label: 'User',
      value: 'ROLE_USER',
    },
  ];

  const languagesList = [
    'English',
    'Vietnamese',
    'Korean',
    'Japanese',
  ];

  const countrysList = [
    'France',
    'Vietnamese',
    'Korean',
    'Japanese',
  ];

  const params = useParams();
  const value = params.id;
  // useEffect(() => {
  //   dispatch(getUserByIdAsync(value));
  // }, [dispatch, value]);
  const { value: email, onChange: onChangeEmail } = useInput('vominhtam@gmail.com');
  const { value: name, onChange: onChangeName } = useInput('Vo Minh Tam');
  const { value: username, onChange: onChangeUsername } = useInput('vominhtam@gmail.com');
  const { value: phone, onChange: onChangePhone } = useInput('0342568923');
  const { value: address, onChange: onChangeaAddress } = useInput('123 duong A phuong B Quy Nhon Binh Dinh');
  const { value: device, onChange: onChangeaDevice } = useInput('Windown computer');
  const [role, setRole] = React.useState(['Marketer']);
  const [country, setCountry] = React.useState(['Vietnam']);
  const [languages, setLanguages] = React.useState(['Vietnamese, English']);
  const { value: avatar, onChange: onChangeAvatar } = useAvatar('');
  console.log(avatar);
  const { value: errorMess, setValue: setError } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);
  const [messErr, setMessErr] = useState('');
  const submit = async () => {
    setError(false);
    if (!email || !name || !username
          || !country || !address || !phone || !role) {
      setError(true);
      setMessErr('Please input all label');
    } else if (!validateEmail(email)) {
      setError(true);
      setMessErr('Invalid email address.');
    } else {
      setError(false);
      setSubmit(true);
      try {
        // const userData = {
        //   // id: value,
        //   username,
        //   email,
        //   role,
        //   name,
        //   phone,
        //   country,
        //   address,
        //   status: 'inactive',
        //   parent: 1,
        // };
        // dispatch(UpdateUser(value, userData));
        // setTimeout(() => history.push('/account_security/all_users'), 1000);
        // const value = await usersService.adduser(userData);
        // const { status } = value;
        // if (status === 201) {
        //   history.push('/account_security/all_users');
        // }
      } catch (err) {
        setError(true);
        if (err.response && err.response.status === BAD_REQUEST) {
          setMessErr('Email or username is already in used.');
        } else {
          setMessErr(err.message);
        }
      }
      setSubmit(false);
    }
  };
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
  const onChangeCheckbox = (event, roleName) => {
    const newRoleList = [...RoleList];
    newRoleList.forEach((roleValue) => {
      if (roleValue.name === roleName) {
        roleValue.checkboxList.forEach((item) => {
          if (item.checkboxName === event.target.name) {
            const newItem = item;
            newItem.value = event.target.checked;
          }
        });
      }
    });
    setRoleList(newRoleList);
  };
  const breadcrumbsList = {
    list: [
      { text: 'Account & Security', link: '/account_security/all_users' },
      { text: 'All users', link: '/account_security/all_users' },
    ],
    active: 'Add New User',
  };

  const breadcrumbsList1 = {
    list: [
      { text: 'Account & Security', link: '/account_security/all_users' },
      { text: 'All users', link: '/account_security/all_users' },
    ],
    active: 'Edit User',
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 50;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  // const handleRedirect = (uri) => {
  //   history.push(uri);
  // };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleChangeLanguages = (e) => {
    setLanguages(e.target.value);
  };
  return (
    <div>
      <HeaderContent
        breadcrumbsList={!value ? breadcrumbsList : breadcrumbsList1}
        title={!value ? 'Add New User' : 'Edit User'}
        className={classes.header}
      />
      <div>
        <Grid style={{ backgroundColor: 'transparent' }}>
          <Paper className={classes.Cardcontent}>
            <Grid container justifyContent="space-between" spacing={1} style={{ marginTop: '15px' }}>
              <Grid item lg={2} xs={2} style={{ height: '250px' }}>
                <Card className={classes.cardProduct}>
                  <img src={image} alt="Avatar" crt="product" style={{ width: '90%', height: '100%' }} />
                </Card>
                <div className={classes.buttonChangeAvatar}>
                  <Typography
                    variant="contained"
                    className={classes.chooseFileBtn}
                  >
                    Edit
                    <input type="file" className={classes.fileInput} onChange={onChangeAvatar} />
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={10} xs={9} className={classes.formContainer}>
                <Grid item lg={4} xs={4}>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Name</Typography>
                    <TextField
                      value={name}
                      onChange={onChangeName}
                      size="small"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      lassName={classes.fieldText}
                      className={classes.fieldText}
                    />
                  </div>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>User name</Typography>
                    <TextField
                      value={username}
                      onChange={onChangeUsername}
                      size="small"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      className={classes.fieldText}
                    />
                  </div>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Role</Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        className={classes.fieldSelect}
                        value={role}
                        onChange={handleChangeRole}
                        multiple
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                      >
                        {roles.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>

                <Grid item lg={4} xs={4}>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Email</Typography>
                    <TextField
                      value={email}
                      onChange={onChangeEmail}
                      size="small"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      className={classes.fieldText}
                    />
                  </div>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Language</Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        className={classes.fieldSelect}
                        value={languages}
                        onChange={handleChangeLanguages}
                        multiple
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                      >
                        {languagesList.map((language) => (
                          <MenuItem key={language} value={language}>
                            <Checkbox checked={languages.indexOf(language) > -1} />
                            <ListItemText primary={language} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Country</Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        className={classes.fieldSelect}
                        value={country}
                        onChange={handleChangeCountry}
                        multiple
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                      >
                        {countrysList.map((countryItem) => (
                          <MenuItem key={countryItem} value={countryItem}>
                            <ListItemText primary={countryItem} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item lg={4} xs={4}>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Phone</Typography>
                    <TextField
                      value={phone}
                      onChange={onChangePhone}
                      size="small"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      className={classes.fieldText}
                    />
                  </div>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>
                      Device Active

                    </Typography>
                    <TextField
                      value={device}
                      onChange={onChangeaDevice}
                      size="small"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      className={classes.fieldText}
                    />
                  </div>
                  <div className={classes.field}>
                    <Typography gutterBottom className={classes.fieldText}>Address</Typography>
                    <TextField
                      value={address}
                      onChange={onChangeaAddress}
                      size="small"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      className={classes.fieldText}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid item sm={12} md={8} lg={8}>
                {errorMess && <Alert severity="error">{messErr}</Alert>}
              </Grid>
              <Grid item lg={10} xs={9}>
                <Button
                  variant="contained"
                  className={classes.Btnprofile}
                  onClick={submit}
                  disabled={isSubmit}
                >
                  Save changes
                </Button>
                <Button
                  variant="contained"
                  className={classes.Btnprofilepassword}
                  onClick={() => { }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.Cardcontent}>
            <Grid>
              <Grid container justifyContent="space-between" alignItems="center">
                <Typography className={classes.titlecardcontent}>
                  Permissions
                  <Typography className={classes.titlecardcontentrole}>
                    Premission accrording to role
                  </Typography>
                </Typography>
                <Box className={classes.titlecardicon}>
                  <Avatar
                    style={{ height: '50%', width: '50%' }}
                    variant="square"
                    src={edit}
                  />
                </Box>
              </Grid>
              <Divider />
              <Grid
                item
                container
                sm={12}
                md={12}
                lg={12}
                className={classes.forms}
              >
                {
            RoleList.map((rolesValue) => (
              <Grid item sm={3} md={3} lg={3} key={rolesValue.name}>
                <Typography className={classes.title}>{rolesValue.name}</Typography>
                <FormGroup>
                  {rolesValue.checkboxList.map((checkbox) => (
                    <FormControlLabel
                      key={checkbox.checkboxName}
                      control={(
                        <Checkbox
                          name={checkbox.checkboxName}
                          checked={checkbox.value}
                          onChange={(e) => onChangeCheckbox(e, rolesValue.name)}
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
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default AddUser;
