/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import circleTop from 'assets/images/circleTop.png';
import circleBottom from 'assets/images/circleBottom.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#D8F4FA',
    position: 'relative',
  },

  fullHeight: {
    height: '100%',
  },
  title: {
    color: '#0D295D',
    fontWeight: 800,
    fontSize: '44px',
    marginTop: theme.spacing(2),
  },
  containerLogin: {
    height: '100%',
  },
  backButton: {
    margin: theme.spacing(1),
    '& .MuiButton-label': {
      textTransform: 'none',
      color: '#8692A6',
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  btnlanguage: {
    color: '#8692A6',
    fontWeight: 600,
    fontSize: '16px',
  },
  activeLanguage: {
    color: '#0096C7',
  },
  gridBanner: {
    maxWidth: '80%',
    maxHeight: '50%',
  },
  banner: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ellipse1: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  ellipse2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

}));

export default function BackgroundForm({ banner, event, children }) {
  const classes = useStyles();
  const history = useHistory();
  const [language, setLanguage] = React.useState('EN');
  const handleSetLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <Grid container className={classes.fullHeight}>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        xs={6}
      >
        <div className={classes.header}>
          {
            event
              ? (
                <Button
                  className={classes.backButton}
                  startIcon={<ArrowBackIos />}
                  onClick={() => {
                    event();
                  }}
                >
                  Back
                </Button>
              )
              : (
                <Button
                  className={classes.backButton}
                  startIcon={<ArrowBackIos />}
                  onClick={() => {
                    history.push('/home');
                  }}
                >
                  Back
                </Button>
              )
          }
          <div>
            <Button
              className={clsx(classes.btnlanguage, {
                [classes.activeLanguage]: language === 'VN',
              })}
              onClick={() => handleSetLanguage('VN')}
            >
              VN
            </Button>
            <span>|</span>
            <Button
              className={clsx(classes.btnlanguage, {
                [classes.activeLanguage]: language === 'EN',
              })}
              onClick={() => handleSetLanguage('EN')}
            >
              EN
            </Button>
          </div>
        </div>
        {children}
      </Grid>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        item
        xs={6}
        className={classes.container}
      >
        <div className={classes.ellipse1}>
          <img src={circleTop} alt="" />
        </div>
        <div className={classes.ellipse2}>
          <img src={circleBottom} alt="" />
        </div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.fullHeight}
        >
          <Typography className={classes.title}>T-Insight</Typography>
          <div className={classes.gridBanner}>
            <img
              src={banner}
              alt="Banned"
              className={classes.banner}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

BackgroundForm.defaultProps = {
  //   location: undefined,
  children: undefined,
  event: null,
};

BackgroundForm.propTypes = {
  //   location: PropTypes.shape({
  //     pathname: PropTypes.string.isRequired,
  //   }),
  children: PropTypes.shape({}),
  banner: PropTypes.string.isRequired,
  event: PropTypes.func,
};
