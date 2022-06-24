import React, { useEffect } from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import WebReportCard from 'components/WebReportCard';
import ReportCard from 'components/ReportCard';
import impression from 'assets/icons/impression.png';
import newusers from 'assets/icons/newfollower.svg';
import reach from 'assets/icons/reach.svg';
import users from 'assets/images/users.svg';
import bounce from 'assets/icons/bounce.svg';
import session from 'assets/icons/session.svg';
import viewpage from 'assets/icons/viewpage.svg';
import visit from 'assets/icons/visit.svg';
import login from 'assets/icons/login.svg';
import PropTypes from 'prop-types';
import toCurrency from 'utils/FormatNumber';
import { useDispatch, useSelector } from 'react-redux';
import getDataGA from 'modules/GaReport/action';
import formatFloat from 'utils/FormatFloat';
import RegionChart from '../RegionChart';
import ChannelChart from '../ChannelChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },

  headpaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  RightContent: {
    margin: theme.spacing(2, 0, 2, 0),
  },
  customerPaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(10),
  },
  marginDivider: {
    margin: theme.spacing(2, 0),
  },
  box: {
    padding: '10px 40px',
  },
  textbox: {
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    color: '#686868',
    fontSize: '20px',
    fontWeight: 700,
  },
  span: {
    color: '#8D9297',
    fontSize: '15px',
    marginLeft: '5px',
  },
  header: {
    background: '#FFFFFF',
    marginTop: '20px',
  },
  more: {
    background: '#2CD9C5',
    color: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 30,
    fontWeight: 700,
    '&:hover': {
      background: '#2CD9C5',
      color: '#FFFFFF',
    },
  },
  back: {
    background: '#ED455C',
    color: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 30,
    marginLeft: 20,
    fontWeight: 700,
    '&:hover': {
      background: '#ED455C',
      color: '#FFFFFF',
    },
  },
  gridmore: {
    marginRight: 20,
  },
  boxheader: {
    marginTop: 1,
  },
  textmore: {
    color: '#FFFFFF',
    '&:hover': {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
  },
}));
function GeneralData() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.gaReport.data);
  useEffect(() => {
    dispatch(getDataGA());
  }, []);

  return (
    <div>
      <Grid item container>
        <Grid container item spacing={3} className={classes.boxheader}>
          <Grid item xs={12} xl={4} md={4} className={classes.width}>
            <Paper className={classes.headpaper} elevation={0}>
              <ChannelChart data={data} />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <RegionChart />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              {data && data.totalTime && (
                <WebReportCard
                  title="Total time"
                  name="Minutes"
                  value={toCurrency(data.totalTime.TotalTime)}
                  image={impression}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={3} className={classes.boxheader}>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpaper} elevation={0}>
            <WebReportCard
              title="Total Visitors"
              name="Users"
              value={toCurrency(data.totalVisitor.TotalVisitor)}
              image={reach}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpaper} elevation={0}>
            <WebReportCard
              title="New Users"
              name="New Users"
              value={toCurrency(data.newUser.NewUsers)}
              image={newusers}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpaper} elevation={0}>
            <WebReportCard
              title="Returning Users"
              name="Returning Users"
              value={toCurrency(data.returningUser.ReturningUsers)}
              image={users}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container item spacing={3} className={classes.boxheader}>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpaper} elevation={0}>
            <WebReportCard
              title="Visit site"
              name="Users"
              value="234"
              image={visit}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpaper} elevation={0}>
            <WebReportCard
              title="Registers"
              name="New Users"
              value="25"
              image={newusers}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpaper} elevation={0}>
            <WebReportCard
              title="Login"
              name="Users"
              value="500"
              image={login}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid container item spacing={3} className={classes.boxheader}>
        <Grid item xs={12} xl={6} md={6}>
          <Paper className={classes.headpaper} elevation={0}>
            <ReportCard
              title="Bounce Rate"
              des="Sessions during which visitors leave the site without interacting with it."
              name="Bounce rate"
              value={`${formatFloat(data.bounceRate.BounceRate)}%`}
              image={bounce}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <Paper className={classes.headpaper} elevation={0}>
            <ReportCard
              title="Exit Rate"
              des=" "
              name="Exit Rate"
              value={`${formatFloat(data.rate.ExitRate)}%`}
              image={bounce}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container item spacing={3} className={classes.boxheader}>
        <Grid item xs={12} xl={6} md={6}>
          <Paper className={classes.headpaper} elevation={0}>
            <ReportCard
              title="View per Session"
              des="An average amount of Page Views your users interact with during a session"
              name="Page views per session"
              value={formatFloat(data.viewSession.ViewPerSession)}
              image={viewpage}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={6} md={6}>
          <Paper className={classes.headpaper} elevation={0}>
            <ReportCard
              title="Sessions"
              des="A period during which the user interacts with your site"
              name="Sessions"
              value={data.session.Session}
              image={session}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

GeneralData.defaultProps = {
  data: null,
};

GeneralData.propTypes = {
  data: PropTypes.shape({
    totalTime: PropTypes.shape({
      TotalTime: PropTypes.number.isRequired,
    }),
    totalVisitor: PropTypes.shape({
      TotalVisitor: PropTypes.number.isRequired,
    }),
    newUser: PropTypes.shape({
      NewUsers: PropTypes.number.isRequired,
    }),
    returningUser: PropTypes.shape({
      ReturningUsers: PropTypes.number.isRequired,
    }),
    bounceRate: PropTypes.shape({
      BounceRate: PropTypes.number.isRequired,
    }),
    rate: PropTypes.shape({
      ExitRate: PropTypes.number.isRequired,
    }),
    viewSession: PropTypes.shape({
      ViewPerSession: PropTypes.number.isRequired,
    }),
    session: PropTypes.shape({
      Session: PropTypes.number.isRequired,
    }),
  }),
};

export default GeneralData;
