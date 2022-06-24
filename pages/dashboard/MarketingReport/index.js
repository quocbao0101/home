/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {
  Grid,
  Paper,
  Box,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import ReportCard from 'components/ReportCard';
import DividerCard from 'components/DividerCard';
import DateRangePicker from 'components/DateRangePicker';
import users from 'assets/icons/users.svg';
import newusers from 'assets/icons/NewUsers.png';
import chart from 'assets/images/stats.png';
import facebook from 'assets/images/facebook.png';
import social from 'assets/icons/social.png';
import { useHistory } from 'react-router-dom';
import totalclick from 'assets/images/click-through-rate.png';
import feedback from 'assets/images/feedback.png';
import totalspent from 'assets/icons/totalspent.png';
import eye from 'assets/icons/eye.png';
import eye1 from 'assets/icons/eye1.png';
import reachusers from 'assets/icons/reachusers.png';
import team from 'assets/images/team.png';
import addfriend from 'assets/images/add-friend.png';
import HeaderContent from 'components/HeaderContent';
import { useInput } from 'hooks/input.hooks';
import colors from 'constants/colors';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import getDataOverview from 'modules/ReportOverview/actions';
import toCurrency, { toFormatNumber } from 'utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },

  headpaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    background: colors.white,
    height: '100%',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  containerDividerCard: {
    background: colors.white,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  marginBottom: {
    marginBottom: '8px',
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
    padding: '10px 0px',
  },
  textbox: {
    color: '#1E293B',
    fontSize: '24px',
    fontWeight: 700,
  },
  span: {
    color: '#1E293B',
    fontSize: '24px',
    fontWeight: 400,
    marginLeft: '5px',
  },
  header: {
    background: '#FFFFFF',
    marginTop: '20px',
    height: '62px',
  },
  more: {
    background: '#0096C7',
    color: '#FFFFFF',
    borderRadius: 4,
    fontWeight: 500,
    fontSize: '14px',
    width: '90px',
    height: '40px',
    '&:hover': {
      background: '#0096C7',
      color: '#FFFFFF',
    },
  },
  gridmore: {
    marginRight: 0,
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
  fieldSelect: {
    height: 40,
    width: 120,
    background: 'white',
    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
    '& .MuiOutlinedInput-input': {
      padding: '9px 10px',
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
  },
  viewText: {
    marginRight: 10,
    color: '#64748B',
    fontSize: 14,
    fontWeight: 400,
  },

  viewContainer: {
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },

  rightContent: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function Marketingreport() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reportOverview.data);
  const dataFB = useSelector((state) => state.reportOverview.dataFB);
  const dataIns = useSelector((state) => state.reportOverview.dataIns);
  useEffect(() => {
    dispatch(getDataOverview());
  }, []);

  const breadcrumbsList = {
    list: [{ text: 'BI Dashboard', link: '/home' }],
    active: 'Marketing report',
  };
  const history = useHistory();

  const handleRedirect = (uri) => {
    history.push(uri);
  };
  const { value: view, onChange: setView } = useInput('day');

  return (
    <Container>
      <HeaderContent
        title="Marketing Report"
        breadcrumbsList={breadcrumbsList}
        rightContent={(
          <div className={classes.rightContent}>
            <div className={classes.viewContainer}>
              <Typography className={classes.viewText}> View by:</Typography>
              <Select
                value={view}
                onChange={setView}
                displayEmpty
                size="small"
                className={classes.fieldSelect}
                variant="outlined"
              >
                <MenuItem value="day">Day</MenuItem>
                <MenuItem value="month">Month</MenuItem>
                <MenuItem value="year">Year</MenuItem>
              </Select>
            </div>
            <DateRangePicker />
          </div>
        )}
      />

      <Grid item container>
        <Grid
          xs={12}
          item
          className={classes.header}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ backgroundColor: 'rgba(226, 232, 240, 0.4)' }}
        >
          <Grid>
            <Box className={classes.box}>
              <Box className={classes.textbox}>
                Website
                <span className={classes.span}>(domain.com)</span>
              </Box>
            </Box>
          </Grid>
          <Grid className={classes.gridmore}>
            <Button
              className={classes.more}
              onClick={() => handleRedirect('/dashboard/marketing_report/web_report')}
            >
              More
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={3} className={classes.boxheader}>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Total Visitors"
                des=""
                value={data.totalVisitor.TotalVisitor}
                image={users}
                name="Users"
                icon={chart}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Social Traffics"
                des=""
                value={data.session.Session}
                image={social}
                name="Sessions"
                icon={chart}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="New Users"
                des=""
                value={data.newUser.NewUsers}
                image={newusers}
                name="New users"
                icon={chart}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid
          xs={12}
          item
          className={classes.header}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ backgroundColor: 'rgba(226, 232, 240, 0.4)' }}
        >
          <Grid>
            <Box className={classes.box}>
              <Box className={classes.textbox}>Facebook</Box>
            </Box>
          </Grid>
          <Grid className={classes.gridmore}>
            <Button
              className={classes.more}
              onClick={() => handleRedirect('/dashboard/marketing_report/facebook_report')}
            >
              More
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={3} className={classes.boxheader}>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Impressions"
                des="The number of times your ads were shown"
                value={toFormatNumber(dataFB.ads_account_insight.impressions)}
                image={eye}
                name="Impressions"
                icon={facebook}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={4} md={4} container>
            <Grid container justifyContent="space-between">
              <Grid
                className={clsx(
                  classes.containerDividerCard,
                  classes.marginBottom,
                )}
                item
                sm={12}
                md={12}
                lg={12}
              >
                <DividerCard
                  title1="Click Through Rate"
                  value1={toCurrency(dataFB.ads_account_insight.ctr)}
                  image1={totalclick}
                />
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                lg={12}
                className={classes.containerDividerCard}
              >
                <DividerCard
                  title1="Total Clicks (all)"
                  value1={dataFB.ads_account_insight.clicks}
                  image1={feedback}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} md={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                des="Budget spent on Facebook ads during this period"
                title="Total Spent on Ads"
                value={`${toFormatNumber(dataFB.ads_account_insight.spend)} $`}
                image={totalspent}
                name="Total spent"
                icon={facebook}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid
          xs={12}
          item
          className={classes.header}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ backgroundColor: 'rgba(226, 232, 240, 0.4)' }}
        >
          <Grid>
            <Box className={classes.box}>
              <Box className={classes.textbox}>Instagram</Box>
            </Box>
          </Grid>
          <Grid className={classes.gridmore}>
            <Button
              className={classes.more}
              onClick={() => handleRedirect('/dashboard/marketing_report/instagram_report')}
            >
              More
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.boxheader} container item spacing={3}>
          <Grid container item spacing={1}>
            <Grid container item spacing={3}>
              <Grid item sm={12} md={6} lg={6}>
                <Paper className={classes.headpaper} elevation={0}>
                  <DividerCard
                    title1="Impressions"
                    value1={dataIns.instaInfoMap.impressions_day}
                    image1={eye1}
                  />
                </Paper>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Paper className={classes.headpaper} elevation={0}>
                  <DividerCard
                    title1="Followers"
                    value1={dataIns.instaInfoMap.follower}
                    image1={team}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container item spacing={3}>
              <Grid item sm={12} md={6} lg={6}>
                <Paper className={classes.headpaper} elevation={0}>
                  <DividerCard
                    title1="Reach"
                    value1={dataIns.instaInfoMap.reach_day}
                    image1={reachusers}
                  />
                </Paper>
              </Grid>

              <Grid item sm={12} md={6} lg={6}>
                <Paper className={classes.headpaper} elevation={0}>
                  <DividerCard
                    title1="New Followers"
                    value1="20"
                    image1={addfriend}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Marketingreport;

const Container = styled.div``;
