import React, { useEffect } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useLocation, useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import authenticationService from 'services/authentication';
import { useSnackbar } from 'notistack';
import loginBanner from 'assets/images/LoginBanner.png';
import { useInput, useCheckbox } from '../../../hooks/input.hooks';
import phone from '../../../assets/images/Phone.svg';
import BackgroundForm from '../../BackgroundForm';
import { OK, BAD_REQUEST } from '../../../constants';

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
    margin: theme.spacing(2, 0, 2, 0),
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: theme.spacing(2, 0, 0, 0),
  },
  descriptionEmail: {
    color: '#1565D8',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    margin: theme.spacing(0, 0, 4, 0),
  },
  field: {
    background: '#ECF2F7',
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
    background: '#1565D8',
    borderRadius: '8px',
    height: '44px',
    '& .MuiButton-label': {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '18px',
    },
  },
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
  link: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
  },
  hyperlink: {
    margin: theme.spacing(2, 0, 2, 0),
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
    color: '#66BCE8',
    cursor: 'pointer',
  },
  containerLogin: {
    height: '100%',
  },
}));

export default function ForgotPasswordVerification() {
  const history = useHistory();
  const { state } = useLocation();
  const { email } = state || {};
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!email) {
      history.push('/forgotpassword');
    }
  }, []);

  const classes = useStyles();

  const { value: messErr, setValue: setMessErr } = useInput('');
  const { value: errorMess, setValue: setError } = useCheckbox(false);
  const { value: code, onChange: onChangeCode } = useInput('');
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);

  useEffect(() => {
    if (!email) {
      history.push('/forgotpassword');
    }
  }, []);

  const verify = async () => {
    setError(false);
    if (!code || code.trim().length === 0) {
      setError(true);
      setMessErr('Please input verify code.');
    } else {
      setSubmit(true);
      try {
        const userData = {
          email,
          code,
        };
        const value = await authenticationService.verifyCodeByEmail(userData);
        const { status } = value;
        if (status === OK) {
          history.push({
            pathname: '/newpassword',
            state: {
              email,
              code,
            },
          });
        }
      } catch (error) {
        setError(true);
        if (error.response && error.response.status === BAD_REQUEST) {
          setMessErr('Verify code invalid.');
        } else {
          setMessErr(error.message);
        }
      }
      setSubmit(false);
    }
  };

  const resend = async (e) => {
    e.preventDefault();
    try {
      const result = await authenticationService.forgotPasswordByEmail(email);
      const { status } = result;
      if (status === OK) {
        enqueueSnackbar('Verify code sent again.', {
          variant: 'success',
        });
        history.push({
          pathname: '/forgotpassword/verification',
          state: {
            email,
          },
        });
      }
    } catch (error) {
      history.push('/forgotpassword');
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
          <Typography className={classes.title} align="center"> Second Step Verification </Typography>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={phone} alt="phone" />
          </Grid>
          <Typography className={classes.description} align="center">
            Enter the verification code we sent to
          </Typography>
          <Typography className={classes.descriptionEmail} align="center">
            {email}
          </Typography>
          <TextField
            id="outlined-code-input"
            label="Type code here"
            type="code"
            autoComplete="current-code"
            variant="outlined"
            size="small"
            value={code}
            onChange={onChangeCode}
            className={classes.field}
            fullWidth
          />
          {errorMess && <Alert severity="error">{messErr}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, {
              [classes.disabled]: isSubmit,
            })}
            onClick={verify}
            disabled={isSubmit}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Verify'}
          </Button>
          <Grid container>
            <Grid item xs={12} style={{ textAlign: 'center', fontWeight: 600 }}>
              Didn&apos;t gate the code?
              {' '}
              <Link to="/forgotpassword/verification" onClick={resend} className={classes.hyperlink}>
                Resend
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Link to="#/" className={classes.hyperlink}>
                Call Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </BackgroundForm>
  );
}
