import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { CircularProgress, InputLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useInput, useCheckbox } from 'hooks/input.hooks';
import { useHistory, useLocation } from 'react-router-dom';
import authenticationService from 'services/authentication';
import { Alert } from '@material-ui/lab';
import loginBanner from 'assets/images/LoginBanner.png';
import {
  BAD_REQUEST,
  OK,
} from '../../constants';
import hand from '../../assets/images/waving-hand.png';
import BackgroundForm from '../BackgroundForm';

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
    margin: theme.spacing(2, 0, 8, 0),
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
    margin: theme.spacing(0, 0, 2, 0),
  },
  submit: {
    margin: theme.spacing(4, 0, 4),
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
    margin: theme.spacing(2, 2, 2, 0),
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
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
}));
export default function ForgotPassword() {
  const history = useHistory();
  const { state } = useLocation();
  const classes = useStyles();

  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);
  const { value: email, onChange: onChangeEmail } = useInput(state || '');
  const { value: messErr, setValue: setMessErr } = useInput('');
  const { value: errorMess, setValue: setError } = useCheckbox(false);

  const handleSubmit = async () => {
    setError(false);
    if (!email || email.trim().length === 0) {
      setError(true);
      setMessErr('Please input email.');
    } else {
      setSubmit(true);
      try {
        const result = await authenticationService.forgotPasswordByEmail(email);
        const { status } = result;
        if (status === OK) {
          history.push({
            pathname: '/forgotpassword/verification',
            state: {
              email,
            },
          });
        }
      } catch (error) {
        setError(true);
        if (error.response && error.response.status === BAD_REQUEST) {
          setMessErr('Email does not exist.');
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
            Forgot your password?
          </Typography>
          <Typography className={classes.description}>
            Please give us your email, well help you.
          </Typography>
          <InputLabel className={classes.label} color="secondary">
            E-mail
          </InputLabel>
          <OutlinedInput
            fullWidth
            name="email"
            autoComplete="email"
            placeholder="Type your e-mail"
            autoFocus
            value={email}
            onChange={onChangeEmail}
            className={classes.field}
          />
          {errorMess && <Alert severity="error">{messErr}</Alert>}
          <Grid item xs>
            <Link href="/login" className={classes.hyperlink}>
              Login ?
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
            onClick={handleSubmit}
            disabled={isSubmit}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Submit'}
          </Button>
          <Grid container>
            <Grid item xs={12} className={classes.link}>
              Don&apos;t have an account?
              <Link href="/signup" className={classes.hyperlink}>
                  &nbsp;Sign Up
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>

    </BackgroundForm>
  );
}
