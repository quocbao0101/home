import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
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

function Overview(props) {
  const {
    data, loading,
  } = props;
  const classes = useStyles();

  console.log(data);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper className={classes.paper} elevation={3}>
            {loading ? (
              <ContentLoader
                speed={1.5}
                viewBox="0 0 400 83"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="77" y="4" rx="3" ry="3" width="250" height="11" />
                <rect x="84" y="70" rx="3" ry="3" width="225" height="5" />
                <rect x="76" y="45" rx="3" ry="3" width="250" height="15" />
                <rect x="0" y="27" rx="3" ry="3" width="100%" height="1" />
              </ContentLoader>
            ) : <StatisticsCard title="Tổng đơn hàng" value={23123678} rate={12} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Doanh thu trung bình" value={23123678376} rate={12} type="vnd" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper} elevation={3}>
            <StatisticsCard title="Doanh thu trung bình" value={23123} rate={12} type="vnd" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Overview.defaultProps = {
  data: [],
  loading: true,
};

Overview.propTypes = {
  data: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

export default Overview;
