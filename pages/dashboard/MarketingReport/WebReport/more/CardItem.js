import React from 'react';
import {
  makeStyles, Typography, Grid, Avatar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Equalizer } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
  },

  title: {
    fontSize: '26px',
    fontWeight: 400,
    color: '#5b658c',
  },

  icon: {
    borderRadius: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  value: {
    fontSize: '40px',
    fontWeight: 400,
    color: '#5b658c',
    paddingLeft: theme.spacing(3),
  },
  waves: {
    color: '#db682f',
  },

}));

function CardItem(props) {
  const {
    name, icon, value, waves,
  } = props;
  const classes = useStyles();
  return (
    <Grid container item className={classes.container}>
      <Typography className={classes.title}>{name}</Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
      >
        <Grid item sm={12} md={4} lg={4}>
          <Avatar src={icon} alt="icon" className={classes.icon} />
        </Grid>
        <Grid item sm={12} md={8} lg={8} className={classes.value}>{value}</Grid>
      </Grid>
      {waves && <Equalizer className={classes.waves} />}
    </Grid>
  );
}

CardItem.defaultProps = {
  waves: false,
};

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  waves: PropTypes.bool,
};
export default CardItem;
