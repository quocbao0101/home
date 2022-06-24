/* eslint-disable no-shadow */
import {
  Avatar,
  Box,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import totalclick from 'assets/icons/click-through-rate.svg';
import costclick from 'assets/icons/cost-click.svg';
// import users from 'assets/images/user.png';
// import chart from 'assets/images/stats.png';
import facebook from 'assets/images/facebook.png';
import totalspent from 'assets/icons/save-money.svg';
import impression from 'assets/icons/view.svg';
import reach from 'assets/icons/reach (2).svg';
import totalclicks from 'assets/icons/totalclicks.svg';
import DateRangePicker from 'components/DateRangePicker';
import HeaderContent from 'components/HeaderContent';
import ReportCard from 'components/ReportCard';
// import TopPostCard from 'components/TopPostCard';
import { useInput } from 'hooks/input.hooks';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import postusers from 'assets/icons/postusers.svg';
import pageclicks from 'assets/icons/pageclicks.svg';
import postimpressions from 'assets/icons/postimpressions.svg';
import postrate from 'assets/icons/postrate.svg';
import postreactions from 'assets/icons/post-reactions.svg';
import likenews from 'assets/icons/like-news.svg';
import FBReportCard from 'components/FBReportCard';
import date from 'assets/icons/date.svg';
import FBReportPage from 'components/FBReportPage';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import getDataFB from 'modules/FBReport/actions';
import { toFormatNumber } from 'utils/FormatNumber';
import formatFloat from 'utils/FormatFloat';
import CampaignTable from './CampaignTable';
// eslint-disable-next-line import/no-named-as-default
// import DividerCard from 'components/DividerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  boxlast: {
    margin: theme.spacing(2, 1, 4, 0),
    color: '#566d8b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '50px',
    height: '50px',
  },
  papersmall: {
    padding: theme.spacing(2, 0, 2, 0),
    maxHeight: 120,
  },
  paper: {
    padding: theme.spacing(1),
    height: 120,
    display: 'flex',
  },
  headpaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  headpapers: {
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
    color: '#1E293B',
    fontSize: '24px',
    fontWeight: 700,
  },
  header: {
    backgroundColor: '#E2E8F066',
    height: '62px',
    margin: '20px 0',
  },
  headers: {
    backgroundColor: '#E2E8F066',
    height: '62px',
    margin: '5px 0',
  },
  back: {
    width: '90px',
    height: '40px',
    color: '#0096C7',
    background: '#FFFFFF',
    borderRadius: 4,
    marginLeft: 20,
    fontWeight: 500,
  },
  gridmore: {
    marginRight: 20,
  },
  boxheader: {
    marginTop: 5,
  },
  des: {
    fontWeight: '550',
    fontSize: '15px',
  },
  icon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  total: {
    padding: 5,
    fontWeight: 700,
  },
  textfunnel: {
    color: '#566d8b',
    fontWeight: 700,
  },
  numberfunnel: {
    float: 'right',
    color: '#566d8b',
    fontWeight: 650,
  },
  whitebox: {
    background: '#ffffff',
    padding: 5,
  },
  lightbox: {
    background: '#f1f3f5',
    padding: 5,
  },
  divider: {
    background: '#588df7',
    padding: 0.5,
  },
  space: {
    marginTop: '40px',
  },
  rightpaper: {
    width: '400px',
    color: '#566d8b',
    fontWeight: 650,
    fontSize: 17,
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    padding: '5px 10px',
    color: '#566d8b',
  },
  timetext: {
    fontWeight: 700,
    fontSize: 14,
    margin: '0 5px',
    color: '#1E293B',
  },
  timedate: {
    fontWeight: 400,
    fontSize: 14,
    color: '#1E293B',
  },
  boxsmall: {
    margin: theme.spacing(1, 2, 4, 2),
    color: '#566d8b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_small: {
    width: '30px',
    height: '30px',
  },
  des_small: {
    fontWeight: '700',
    fontSize: '12px',
  },
  textback: {
    color: '#FFFFFF',
    '&:hover': {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
  },
  subHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -18,
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
  },
  viewContainer: {
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
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
  icons: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
}));
const columnName1 = ['Adset Name', 'CTR(all)', 'CPC()all', 'Total spent'];
const columnName2 = [
  'Adset Name',
  'Clicks(all)',
  'CTR(Link click-through rate)',
  'CPC(Cost per link click)',
  'Total spent',
];
function FacebookReport() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const datafbADS = useSelector((state) => state.fbReport.datafbADS);
  const datafbPage = useSelector((state) => state.fbReport.datafbPage);
  const datafbTopPage = useSelector((state) => state.fbReport.datafbTopPage);
  const adsetNameData = [];
  const campaignData = [];
  if (datafbADS != null) {
    datafbADS.ads_performance.forEach((element) => {
      const array = [];
      array.push(element.adSetName);
      array.push(element.cpc);
      array.push(element.ctr);
      array.push(element.spend);
      adsetNameData.push(array);
    });
    datafbADS.campaign_performance.forEach((element) => {
      const array = [];
      array.push(element.campaignName);
      array.push(element.clicks);
      array.push(element.ctr);
      array.push(element.cpc);
      array.push(element.spend);
      campaignData.push(array);
    });
  }

  let valuePageImpressions = null;
  let valuePageEngagements = null;
  let valuePageUsers = null;
  let valueReactions = null;
  let valuePageLike = null;
  if (datafbPage.data_fan_page.length > 0) {
    valuePageImpressions = datafbPage.data_fan_page.find(
      (value) => value.name === 'page_posts_impressions',
    ).insightsValues[0].value;

    valuePageEngagements = datafbPage.data_fan_page.find(
      (value) => value.name === 'page_post_engagements',
    ).insightsValues[0].value;

    valuePageUsers = datafbPage.data_fan_page.find(
      (value) => value.name === 'page_engaged_users',
    ).insightsValues[0].value;

    valueReactions = datafbPage.data_fan_page_complementary.find(
      (value) => value.name === 'page_actions_post_reactions_total',
    ).insightsValueComplementaries[0].value.total;

    valuePageLike = datafbPage.data_fan_page_complementary.find(
      (value) => value.name === 'page_fans_by_like_source',
    ).insightsValueComplementaries[0].value.total;
  }

  useEffect(() => {
    dispatch(getDataFB());
  }, []);
  const { value: view, onChange: setView } = useInput('day');
  const handleGetRangeDateValue = (start, end) => {
    console.log({ start, end });
  };

  const breadcrumbsList = {
    list: [
      { text: 'BI Dashboard', link: '/dashboard' },
      { text: 'Marketing report', link: '/dashboard/marketing_report' },
    ],
    active: 'Facebook report',
  };
  return (
    <div className={classes.container}>
      <div className={classes.subHeaderContainer}>
        <HeaderContent
          title="Marketing report"
          breadcrumbsList={breadcrumbsList}
        />
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
          <div>
            <DateRangePicker getValue={handleGetRangeDateValue} />
          </div>
        </div>
      </div>
      <Grid item container>
        <Grid
          xs={12}
          item
          className={classes.header}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <Box className={classes.box}>
              <Box className={classes.textbox}>Facebook Ads</Box>
            </Box>
          </Grid>
          <Grid className={classes.gridmore}>
            <Link className={classes.textback} to="/dashboard/marketing_report">
              <Button className={classes.back}>Back</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container item spacing={3} className={classes.boxheader}>
          <Grid item xs={12} md={4} xl={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Impressions"
                des="The number of times your ads were shown"
                value={toFormatNumber(
                  datafbADS.ads_account_insight.impressions,
                )}
                image={impression}
                name="Impressions"
                icon={facebook}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                des="Budget spent on Facebook ads during this period"
                title="Total Spent on Ads"
                value={`$ ${toFormatNumber(
                  datafbADS.ads_account_insight.spend,
                )}`}
                image={totalspent}
                name="Total spent"
                icon={facebook}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Click Through Rate"
                value={formatFloat(datafbADS.ads_account_insight.ctr)}
                image={totalclick}
                name="CTR (all)"
                icon={facebook}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid container item spacing={3} className={classes.boxheader}>
          <Grid item xs={12} md={4} xl={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                des="The number of times your ads were shown"
                title="Cost Per Click"
                value={`$ ${formatFloat(datafbADS.ads_account_insight.cpc)}`}
                image={costclick}
                name="CPC (all)"
                icon={facebook}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Reach"
                value={datafbADS.ads_account_insight.reach}
                image={reach}
                name="Reach"
                icon={facebook}
                des=""
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Paper className={classes.headpaper} elevation={0}>
              <ReportCard
                title="Total clicks"
                value={datafbADS.ads_account_insight.clicks}
                image={totalclicks}
                name="Total clicks (all)"
                icon={facebook}
                des=""
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} md={12} lg={12} style={{ marginTop: '40px' }}>
        <CampaignTable
          data={adsetNameData}
          name="Adset Name"
          columnNames={columnName1}
        />
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
        <CampaignTable
          data={campaignData}
          name="Campaign Performance"
          columnNames={columnName2}
        />
      </Grid>
      <Grid item container>
        <Grid
          xs={12}
          item
          className={classes.headers}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <Box className={classes.box}>
              <Box className={classes.textbox}>Facebook page</Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} xl={3}>
        <Paper
          elevation={0}
          className={classes.paper}
          style={{
            width: '670px',
            height: '100%',
            background: '#fafafa',
            marginTop: '15px',
          }}
        >
          <Grid xs item className={classes.rightpaper}>
            <Avatar variant="square" src={date} className={classes.icons} />
            <Typography className={classes.timetext}>Date period:</Typography>
            <Typography className={classes.timeday}>
              09/06/2021 - 10/05/2021
            </Typography>
          </Grid>
          <Grid item xs className={classes.time}>
            <Typography>
              <b style={{ color: '#1E293B', fontSize: 14 }}>Duration: </b>
              30 days
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid container item spacing={3} className={classes.boxheader}>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpapers} elevation={0}>
            <FBReportCard
              name="Post engaged users"
              value={valuePageUsers}
              image={postusers}
              style={{ height: '100px', background: 'blue' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpapers} elevation={0}>
            <FBReportCard
              name="Page clicks"
              value={valuePageEngagements}
              image={pageclicks}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpapers} elevation={0}>
            <FBReportCard
              name="Post impressions"
              value={valuePageImpressions}
              image={postimpressions}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container item spacing={3} className={classes.boxheader}>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpapers} elevation={0}>
            <FBReportCard
              name="Post engagement rate"
              value="30"
              image={postrate}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpapers} elevation={0}>
            <FBReportCard
              name="Post reactions"
              value={valueReactions}
              image={postreactions}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4} md={4}>
          <Paper className={classes.headpapers} elevation={0}>
            <FBReportCard
              name="Like from news feed"
              value={valuePageLike}
              image={likenews}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.space}>
        <Paper elevation={0} style={{ padding: '15px' }}>
          <Grid container item>
            {datafbTopPage.top_page.map((item) => {
              const valuePostImpressions = item.insights.data.find(
                (value) => value.name === 'post_impressions',
              ).values[0].value;
              const valuePostClicks = item.insights.data.find(
                (value) => value.name === 'post_clicks',
              ).values[0].value;
              const valuePostUsers = item.insights.data.find(
                (value) => value.name === 'post_engaged_users',
              ).values[0].value;
              const valuePostFans = item.insights.data.find(
                (value) => value.name === 'post_engaged_fan',
              ).values[0].value;
              return (
                <Grid item xs={12} xl={4} md={4} key={item.id}>
                  <Paper elevation={0}>
                    <FBReportPage
                      name={item.message}
                      image={item.full_picture}
                      postImpressions={valuePostImpressions}
                      postClicks={valuePostClicks}
                      postUsers={valuePostUsers}
                      postFans={valuePostFans}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
FacebookReport.defaultProps = {
  data: null,
};

FacebookReport.propTypes = {
  data: PropTypes.shape({
    data1: PropTypes.shape({
      ads_account_insight: PropTypes.shape({
        impressions: PropTypes.number.isRequired,
        ctr: PropTypes.number.isRequired,
        spend: PropTypes.number.isRequired,
        cpc: PropTypes.number.isRequired,
        reach: PropTypes.number.isRequired,
        clicks: PropTypes.number.isRequired,
      }),
      ads_performance: PropTypes.arrayOf(
        PropTypes.shape({
          adSetName: PropTypes.string.isRequired,
          cpc: PropTypes.string.isRequired,
          ctr: PropTypes.string.isRequired,
          spend: PropTypes.string.isRequired,
        }),
      ),
      campaign_performance: PropTypes.arrayOf(
        PropTypes.shape({
          campaignName: PropTypes.string.isRequired,
          clicks: PropTypes.string.isRequired,
          ctr: PropTypes.string.isRequired,
          cpc: PropTypes.string.isRequired,
          spend: PropTypes.string.isRequired,
        }),
      ),
    }),
    data2: PropTypes.shape({
      data_fan_page: PropTypes.arrayOf(
        PropTypes.shape({
          insightsValues: PropTypes.arrayOf(
            PropTypes.shape({
              end_time: PropTypes.string.isRequired,
              value: PropTypes.number.isRequired,
            }),
          ),
          name: PropTypes.string.isRequired,
          period: PropTypes.string.isRequired,
        }),
      ),
      data_fan_page_complementary: PropTypes.arrayOf(
        PropTypes.shape({
          insightsValueComplementaries: PropTypes.arrayOf(
            PropTypes.shape({
              end_time: PropTypes.string.isRequired,
              value: PropTypes.arrayOf(
                PropTypes.shape({
                  total: PropTypes.string.isRequired,
                }),
              ),
            }),
          ),
          name: PropTypes.string.isRequired,
          period: PropTypes.string.isRequired,
        }),
      ),
    }),
    data3: PropTypes.shape({
      top_page: PropTypes.arrayOf(
        PropTypes.shape({
          message: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          insights: PropTypes.arrayOf(
            PropTypes.shape({
              data: PropTypes.arrayOf(
                PropTypes.shape({
                  name: PropTypes.string.isRequired,
                  period: PropTypes.string.isRequired,
                  values: PropTypes.arrayOf(
                    PropTypes.shape({
                      value: PropTypes.number.isRequired,
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    }),
  }),
};
export default FacebookReport;

// // const Container = styled.div`
// //   background-color: #F7F9FA;
// // `;
// const Titles = styled.p`
//   margin-bottom: 10;
//   font-weight:700;
//   font-size:30px;
//   color: #566d8b;
// `;
