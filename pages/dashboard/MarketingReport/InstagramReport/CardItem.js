import React from 'react';
import {
  makeStyles, Grid, Typography, Avatar, Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import toCurrency from 'utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
  large: {
    borderRadius: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  paper: {
    padding: theme.spacing(3),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '350px',
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    color: '#616D92',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  text: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#797979',
    marginLeft: '10px',
  },

  number: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#1E293B',
    marginLeft: '10px',
  },

}));
function CardItem(props) {
  const {
    icon, text, number, percent,
  } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid
        container
      >
        <Grid item md={5} lg={3} xl={2} className={classes.icon}>
          <Avatar alt="icon" src={icon} className={classes.large} />
        </Grid>
        <Grid item md={7} lg={9} xl={10} className={classes.content}>
          <Typography className={classes.text}>{text}</Typography>
          <Typography>
            <span className={classes.number}>{!percent ? toCurrency(number) : number}</span>
            {percent && <span style={{ fontSize: '48px' }}>%</span>}
          </Typography>
        </Grid>
      </Grid>
    </Paper>

  );
}
CardItem.defaultProps = {
  icon: null,
  percent: false,
};

CardItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  percent: PropTypes.bool,
};

export default CardItem;
