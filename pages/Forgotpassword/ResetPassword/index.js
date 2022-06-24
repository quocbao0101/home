import React, { useEffect } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { CircularProgress, InputLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import authenticationService from 'services/authentication';
import loginBanner from 'assets/images/LoginBanner.png';
import { useInput, useCheckbox } from '../../../hooks/input.hooks';
import hand from '../../../assets/images/waving-hand.png';
import BackgroundForm from '../../BackgroundForm';
import {
  BAD_REQUEST,
  OK,
} from '../../../constants';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#E2F0FF',
    height: '100vh',
  },
  backgroundContainer: {
    height: '100%',
  },
  title: {
    width: '400px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '26px',
    marginTop: theme.spacing(2),
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: theme.spacing(2, 0, 5, 0),
    width: 400,
  },
  label: {
    color: '#455360',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    width: 400,
    margin: theme.spacing(4, 0, 1, 0),
  },
  field: {
    background: '#ECF2F7',
    height: 40,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#1565D8',
    borderRadius: '8px',
    height: '44px',
    '& .MuiButton-label': {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '18px',
    },
  },
  link: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
  },
  hyperlink: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
    color: '#66BCE8',
  },
  containerLogin: {
    height: '100%',
  },
  backToLogin: {
    marginTop: theme.spacing(2),
  },
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
}));

export default function ResetPassword() {
  const history = useHistory();
  const classes = useStyles();
  const { state } = useLocation();
  const { email, code } = state || {};

  useEffect(() => {
    if (!email || !code) {
      history.push('/forgotpassword');
    }
  }, []);

  const { value: password, onChange: onChangePassword } = useInput('');
  const { value: repassword, onChange: onChangeRePassword } = useInput('');
  const { value: messErr, setValue: setMessErr } = useInput('');
  const { value: errorMess, setValue: setError } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);

  const checkPass = async () => {
    setError(false);
    if (
      !password
      || !repassword
      || password.trim().length === 0
      || repassword.trim().length === 0
    ) {
      setError(true);
      setMessErr('Please input password or repassword');
    } else if (password !== repassword) {
      setError(true);
      setMessErr('Passwords do not match.');
    } else {
      setSubmit(true);
      try {
        const userData = {
          email,
          code,
          password,
          confirmPassword: repassword,
        };
        const value = await authenticationService.resetPassword(userData);
        const { status } = value;
        if (status === OK) {
          history.push({
            pathname: '/newpassword/success',
            state: 'success',
          });
        }
      } catch (error) {
        setError(true);
        if (error.response && error.response.status === BAD_REQUEST) {
          setMessErr('You have not verified the code.');
        } else {
          setMessErr(error.message);
        }
      }
      setSubmit(false);
    }
  };

  return (
    <BackgroundForm banner={loginBanner}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerLogin}
      >
        <Container maxWidth="xs">
          <img src={hand} alt="hand" />
          <Typography
            align="justify"
            className={classes.title}
          >
            Your new password!
          </Typography>
          <Typography className={classes.description}>
            Enter your new password, please.
          </Typography>
          <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            fullWidth
            name="password"
            type="password"
            id="password"
            placeholder="Type your password"
            className={classes.field}
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
          />
          <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Re Password</InputLabel>
          <OutlinedInput
            fullWidth
            name="repassword"
            type="password"
            id="repassword"
            placeholder="Type your new password"
            className={classes.field}
            autoComplete="current-repassword"
            value={repassword}
            onChange={onChangeRePassword}
          />
          {errorMess && <Alert severity="error">{messErr}</Alert>}
          <Grid item xs className={classes.backToLogin}>
            <Link href="/login" className={classes.hyperlink}>
              Login?
            </Link>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, {
              [classes.disabled]: isSubmit,
            })}
            onClick={checkPass}
            disabled={isSubmit}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Submit'}
          </Button>
        </Container>
      </Grid>
    </BackgroundForm>
  );
}
