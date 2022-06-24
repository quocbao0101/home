import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StatisticsCard from '../../components/StatisticsCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function BehaviorAnalytics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Number of content view" value={23123678} rate={12} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Product view" value={23123678376} rate={12} type="vnd" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Social login" value={23123} rate={12} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Submit contact" value={16} rate={12} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Add to cart" value={23123} rate={12} type="vnd" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Purchase" value={2} rate={12} type="percent" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Email link click" value={2} rate={12} type="percent" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} />
      </Grid>
    </div>
  );
}

export default BehaviorAnalytics;
