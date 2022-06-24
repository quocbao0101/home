import {
  Avatar,
  Box,
  Button,
  Card, Checkbox, Divider, FormControlLabel, FormGroup, Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';
import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { selectedUserSelector } from 'modules/users/selector';
// import {
//   getUserByIdAsync,
// } from 'modules/users/actions';
import HeaderContent from 'components/HeaderContent';
import image from 'assets/images/image.png';
import email from 'assets/icons/email (3).svg';
import phone from 'assets/icons/phone.svg';
import role from 'assets/icons/role.svg';
import username from 'assets/icons/username.svg';
import language from 'assets/icons/language.svg';
import active from 'assets/icons/active.svg';
import dob from 'assets/icons/dob.svg';
import country from 'assets/icons/coutry.svg';
import address from 'assets/icons/address (2).svg';
import edit from 'assets/icons/edit.svg';
import colors from 'constants/colors';
import Data from './HA MANH CHIEN.json';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    background: '#FFFFFFCC',
    borderRadius: 20,
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(4),
    '& .MuiCard-root': {
      ShadowRoot: 2,
    },
  },
  ChartContainer: {
    padding: theme.spacing(1),
  },
  headercard: {
    margin: theme.spacing(2, 0, 2),
  },
  cardlist: {
    width: 380,
    height: 340,
    borderRadius: 20,
    margin: theme.spacing(2, 3, 2, 3),
  },
  name: {
    fontfamily: 'Roboto',
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'left',
    color: '#1E293B',
    textTransform: 'uppercase',
  },
  contact: {
    marginBottom: theme.spacing(0, 1, 0, 1),
  },
  contenttext: {
    padding: theme.spacing(1),
    width: '100%',
    height: '40px',
    margin: theme.spacing(1, 0, 0, 0),
    color: '#566d8b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
  },
  contenttext1: {
    padding: theme.spacing(1),
    width: '100%',
    height: '40px',
    color: '#566d8b',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
  },
  contenvalue: {
    padding: theme.spacing(1),
    width: '100%',
    height: '40px',
    color: '#566d8b',
    flexDirection: 'row',
    position: 'relative',
  },
  status: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#4CFA9D',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
    margin: theme.spacing(0, 1, 0, 1),
  },
  rank: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#27AE60',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
    margin: theme.spacing(0, 1, 0, 1),
  },
  silver: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#FBD3014D',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
    margin: theme.spacing(0, 1, 0, 1),
  },
  diamond: {
    width: 55,
    height: 20,
    borderRadius: 5,
    background: '#27AE604D',
    color: ' #505D6F',
    fontfamily: 'Red Hat Display',
    fontSize: 10,
    fontWeight: 500,
    margin: theme.spacing(0, 1, 0, 1),
  },
  sex: {
    color: ' #2074F2',
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    margin: theme.spacing(0, 1, 0, 1),
  },
  cardtext: {
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'capitalize',
    color: '#22215B',
    position: 'absolute',
    left: 150,
    top: 8,
    display: 'flex',
  },
  cardvalue: {
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'capitalize',
    color: '#1E293B',
    position: 'absolute',
    left: 50,
    top: 8,
    display: 'flex',
  },
  cardprogress: {
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'capitalize',
    color: '#1E293B',
    position: 'absolute',
    left: 150,
    top: 14,
    display: 'flex',
  },
  cardtitle: {
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#22215B',
    marginRight: '10px',
  },
  form: {
    width: '80%',
    marginBottom: theme.spacing(2),
  },
  form1: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  cardSearch: {
    borderRadius: 4,
    height: 120,
    width: 400,
  },
  textField: {
    width: '397px',
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
  email: {
    color: '#4E8FF0',
    textDecoration: 'underline',
  },
  number: {
    color: '#2EBA6F',
  },
  content: {
    padding: theme.spacing(0, 6, 0, 6),
  },
  addBtn: {
    width: 157,
    marginLeft: theme.spacing(2),
    color: 'white',
    textTransform: 'none',
    fontWeight: 500,
    backgroundColor: '#0096C7',
    '&:hover': {
      backgroundColor: '#0077B6',
    },
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
  BtnprofileDelete: {
    maxWidth: 300,
    padding: theme.spacing(1, 4),
    marginLeft: theme.spacing(2),
    color: '#F43F5E',
    textTransform: 'none',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 14,
    backgroundColor: 'transparent',
    border: '1px solid #F43F5E',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  Btnprofilepassword: {
    maxWidth: 300,
    padding: theme.spacing(1, 2),
    marginLeft: theme.spacing(2),
    color: '#0096C7',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 14,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontFamily: 'Inter',
    border: '1px solid #E2E8F0',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  headpaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  image: {
    width: '40px',
    height: '40px',
    marginTop: '20px',
    marginLeft: '-10px',
    marginRight: '10px',
  },
  box: {
    // margin: theme.spacing(3, 1, 4, 5),
    color: '#566d8b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
  },
  boxIcon: {
    color: '#566d8b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '50px',
    justifyContent: 'space-between',
  },
  description: {
    color: '#566d8b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '50px',
  },
  icon: {
    marginRight: '10px',
  },
  contents: {
    marginRight: '40px',
  },
  descriptions: {
    marginRight: '100px',
    fontSize: '14px',
    fontWeight: 400,
    color: '#1E293B',
  },
  boxs: {
    display: 'flex',
  },
  icons: {
    width: '17px',
    height: '17px',
    marginRight: '8px',
  },
  boxContainer: {
    width: '100%',
    height: '40px',
    margin: theme.spacing(1, 0, 0, 0),
    color: '#566d8b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
  },
  boxRight: {
    position: 'absolute',
    left: 150,
    top: 0,
    display: 'flex',
  },
  profile: {
    fontSize: 14,
    fontWeight: 600,
  },
  appbar: {
    display: 'flex',
    backgroundColor: '#fafafa',
    margin: '35px 0 10px 0',
    '&.MuiPaper-elevation4': {
      boxShadow: 'none !important',
    },
  },
  tab: {
    maxWidth: '550px',
    minWidth: '0',
    marginRight: 10,
    '& .MuiTab-wrapper': {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 600,
    },
    '&.Mui-selected': {
      color: '#0096C7',
    },
  },
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '48px',
  },
  Cardcontent: {
    borderRadius: 4,
    padding: theme.spacing(1, 2, 4, 2),
    marginTop: theme.spacing(1),
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  cardProduct: {
    boxShadow: 'none',
  },
  cardtextcolor: {
    fontfamily: 'Roboto',
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'capitalize',
    color: '#1E293B',
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
}));
function ViewProfile() {
  // const params = useParams();
  // const value = params.id;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUserByIdAsync(value));
  // }, [dispatch, value]);
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
    newRoleList.forEach((roles) => {
      if (roles.name === roleName) {
        roles.checkboxList.forEach((item) => {
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
    active: 'User',
  };

  const classes = useStyles();

  return (
    <div>
      <HeaderContent
        breadcrumbsList={breadcrumbsList}
        title="User Profile"
      />
      <div>
        {Data.map((menuItem) => (
          <Grid style={{ backgroundColor: 'transparent' }}>
            <Paper className={classes.Cardcontent}>
              <Grid container justifyContent="space-between" alignItems="center" spacing={4} style={{ marginTop: '15px' }}>
                <Grid item lg={2} xs={2}>
                  <Card className={classes.cardProduct}>
                    <img src={image} crt="product" alt="" style={{ width: '100%', height: '100%' }} />
                  </Card>
                </Grid>
                <Grid item lg={10} xs={9}>
                  <Grid container>
                    <Grid item lg={12} xs={12}>
                      <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item lg={5} xs={10}>
                          <Typography className={classes.name}>
                            {menuItem.customer_sources.Name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container style={{ paddingLeft: '5px' }}>
                      <Grid item lg={4} xs={4}>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={email} crt="email" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Email:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.email}
                          </Typography>
                        </Grid>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={phone} crt="phone" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Phone:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.telephone}
                          </Typography>
                        </Grid>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={role} crt="role" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Role:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.Role}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item lg={4} xs={4}>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={username} crt="username" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Username:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.Name}
                          </Typography>
                        </Grid>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={language} crt="language" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Languages:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.languages}
                          </Typography>
                        </Grid>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={active} crt="active" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Device Active:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.DeviceActive}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item lg={4} xs={4}>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={dob} crt="dob" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            DOB:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.DOB}
                          </Typography>
                        </Grid>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={country} crt="country" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Country:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.Country}
                          </Typography>
                        </Grid>
                        <Grid className={classes.cardWrapper}>
                          <Box className={classes.image}>
                            <img src={address} crt="address" alt="" style={{ width: '100%', height: '50%' }} />
                          </Box>
                          <Typography className={classes.cardtitle}>
                            Address:
                          </Typography>
                          <Typography className={classes.cardtextcolor}>
                            {menuItem.customer_sources.Address}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={10} xs={9}>
                  <Button
                    variant="contained"
                    className={classes.Btnprofile}
                    onClick={() => { }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.BtnprofileDelete}
                    onClick={() => { }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.Btnprofilepassword}
                    onClick={() => { }}
                  >
                    Change password
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.Btnprofilepassword}
                    onClick={() => { }}
                  >
                    Change Two-factor Password
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
            RoleList.map((roles) => (
              <Grid item sm={3} md={3} lg={3} key={roles.name}>
                <Typography className={classes.title}>{roles.name}</Typography>
                <FormGroup>
                  {roles.checkboxList.map((checkbox) => (
                    <FormControlLabel
                      key={checkbox.checkboxName}
                      control={(
                        <Checkbox
                          name={checkbox.checkboxName}
                          checked={checkbox.value}
                          onChange={(e) => onChangeCheckbox(e, roles.name)}
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
        ))}
      </div>
    </div>
  );
}

export default ViewProfile;
