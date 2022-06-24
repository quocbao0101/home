import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import CommentIcon from 'assets/icons/comments.png';
import MailIcon from 'assets/icons/email.png';
import FollowerIcon from 'assets/icons/followers.png';
import ImpressionIcon from 'assets/icons/impression.png';
import LikeIcon from 'assets/icons/like.png';
import NewFollowerIcon from 'assets/icons/newfollower.png';
import PhoneIcon from 'assets/icons/phone-call.png';
import LocationIcon from 'assets/icons/placeholder.png';
import ReachIcon from 'assets/icons/reach.png';
import WebClickIcon from 'assets/icons/tap.png';
import DateRangePicker from 'components/DateRangePicker';
import HeaderContent from 'components/HeaderContent';
import LegendChartCustom from 'components/LegendChartCustom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import getInstagramReport from 'modules/instagram/actions';
import { useInput } from 'hooks/input.hooks';
import CardItem from './CardItem';
import Chart from './Chart';
import CustomListItem from './CustomListItem';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '350px',
  },

  RightContent: {
    margin: theme.spacing(2, 0, 2, 0),
  },

  containerLegendChart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '10px',
    '&:hover': {
      backgroundColor: '#E2E8F0',
    },
  },

  marginTop: {
    marginTop: 10,
  },

  text: {
    // marginLeft: theme.spacing(2),
    color: '#1E293B',
    fontSize: '24px',
    fontWeight: 700,
    padding: '0px',
    // textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
  },

  btn: {
    width: '90px',
    height: '40px',
    borderRadius: '4px',
    fontSize: '14',
    fontWeight: 500,
    color: '#0096C7',
    background: '#FFFFFF',
    '&:hover': {
      background: '#0096C7',
      color: '#FFFFFF',
    },
  },

  chartTitle: {
    color: '#1E293B',
    fontSize: '18px',
    fontWeight: 700,
  },

  subChartTitle: {
    marginTop: '10px',
    color: '#797979',
    fontSize: '14px',
    fontWeight: 400,
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginTop: theme.spacing(2),
  },
  avatarIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(3),
  },
  videoViewsCard: {
    padding: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    minWidth: '350px',
  },

  flexBox: {
    display: 'flex',
    padding: '40px',
    alignItems: 'center',
  },

  textContainer: {
    color: '#616D92',
  },

  sampledata: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 30px',
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

const breadcrumbsList = {
  list: [
    { text: 'BI Dashboard', link: '/dashboard' },
    { text: 'Marketing report', link: '/dashboard/marketing_report' },
  ],
  active: 'Instagram Report',
};
function InstagramReport() {
  const dataReport = useSelector((state) => state.insReport.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInstagramReport());
  }, [dispatch]);
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = (uri) => {
    history.push(uri);
  };
  const gender = [dataReport.F, dataReport.M, dataReport.U];
  const age = [dataReport.a_13_17, dataReport.a_18_24, dataReport.other];
  const rate = {
    rateGender: {
      female: ((gender[0] / (gender[0] + gender[1] + gender[2])) * 100).toFixed(2),
      male: ((gender[1] / (gender[0] + gender[1] + gender[2])) * 100).toFixed(2),
      unknown: ((gender[2] / (gender[0] + gender[1] + gender[2])) * 100).toFixed(2),
    },
    rateAge: {
      a_13_17: ((age[0] / (age[0] + age[1] + age[2])) * 100).toFixed(2),
      a_18_24: ((age[1] / (age[0] + age[1] + age[2])) * 100).toFixed(2),
      other: ((age[2] / (age[0] + age[1] + age[2])) * 100).toFixed(2),
    },
  };
  const chartGender = [rate.rateGender.female, rate.rateGender.male, rate.rateGender.unknown];
  const chartAge = [rate.rateAge.a_13_17, rate.rateAge.a_18_24, rate.rateAge.other];
  const GenderFollowerData = [
    {
      id: 1,
      name: 'Female',
      y: parseFloat(chartGender[0]),
      color: '#023E8A',
      value: parseInt(gender[0], 10),
    },
    {
      id: 2,
      name: 'Male',
      y: parseFloat(chartGender[1]),
      color: '#0096C7',
      value: parseInt(gender[1], 10),
    },
    {
      id: 3,
      name: 'Unknown',
      y: parseFloat(chartGender[2]),
      color: '#ADE8F4',
      value: parseInt(gender[2], 10),
    },
  ];
  const AgeAudienceData = [
    {
      id: 1,
      name: '13-17',
      y: parseFloat(chartAge[0]),
      color: '#023E8A',
      value: parseInt(age[0], 10),
    },
    {
      id: 2,
      name: '18-24',
      y: parseFloat(chartAge[1]),
      color: '#0096C7',
      value: parseInt(age[1], 10),
    },
    {
      id: 3,
      name: 'Other',
      y: parseFloat(chartAge[2]),
      color: '#ADE8F4',
      value: parseInt(age[2], 10),
    },
  ];
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
      <Grid container>
        <Grid
          xs={12}
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{
            backgroundColor: 'rgba(226, 232, 240, 0.4)',
            padding: '10px',
            marginBottom: '20px',
            height: '62px',
          }}
        >
          <Grid item className={classes.text}>
            Instagram
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.btn}
              onClick={() => handleRedirect('/dashboard/marketing_report')}
            >
              Back
            </Button>
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid container item spacing={2}>
            <Grid item sm={12} md={6} lg={6}>
              <CardItem
                icon={ImpressionIcon}
                text="Impressions"
                number={dataReport.impressions_day}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <CardItem
                icon={FollowerIcon}
                text="Followers"
                number={dataReport.follower}
              />
            </Grid>
          </Grid>

          <Grid container item spacing={2}>
            <Grid item sm={12} md={6} lg={6}>
              <CardItem
                icon={ReachIcon}
                text="Reach"
                number={dataReport.reach_day}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <CardItem
                icon={NewFollowerIcon}
                text="New Followers"
                number={dataReport.follower_count_day}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container item spacing={2} className={classes.marginTop}>
          <Grid item sm={12} md={6} lg={6} container>
            <Grid item sm={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Typography className={classes.chartTitle}>
                  {' '}
                  Reaction
                  {' '}
                </Typography>
                <div>
                  <CustomListItem icon={LikeIcon} title="Likes" value={dataReport.like} />
                  <Divider />
                  <CustomListItem
                    icon={CommentIcon}
                    title="Comments"
                    value={dataReport.comment}
                  />
                  <Divider />
                </div>
                <div className={classes.sampledata} />
              </Paper>

              <Grid item sm={12} md={12} lg={12} className={classes.item}>
                <Grid
                  container
                  item
                  style={{
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white',
                  }}
                >
                  <Grid item sm={7} md={7} lg={7} style={{ padding: '20px' }}>
                    <div className={classes.chartTitle}>
                      {' '}
                      Followers by Gender
                      {' '}
                    </div>
                    <div className={classes.subChartTitle}>Followers/Gender </div>
                    <div>
                      {GenderFollowerData.map((item) => (
                        <div
                          key={item.id}
                          className={classes.containerLegendChart}
                        >
                          <LegendChartCustom
                            name={item.name}
                            color={item.color}
                            type="circle"
                          />
                          <span>{`${item.value} (${item.y}%)`}</span>
                        </div>
                      ))}
                    </div>
                  </Grid>
                  <Grid
                    item
                    sm={5}
                    md={5}
                    lg={5}
                    className={classes.chartContainer}
                  >
                    <Chart data={GenderFollowerData} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item sm={12} md={6} lg={6}>
            <Grid item sm={12} md={12} lg={12}>
              <Paper
                className={classes.paper}
                // style={{ paddingBottom: '52px' }}
              >
                <Typography
                  className={classes.chartTitle}
                >
                  {' '}
                  Clicks by type
                  {' '}
                </Typography>
                <div>
                  <CustomListItem
                    icon={WebClickIcon}
                    title="Website clicks"
                    value={dataReport.website_clicks_day}
                  />
                  <CustomListItem
                    icon={MailIcon}
                    title="Email contacts"
                    value={dataReport.email_contacts_day}
                    backgroundColor="#E2E8F0"
                  />
                  <CustomListItem
                    icon={LocationIcon}
                    title="Get Directions clicks"
                    value={dataReport.get_directions_clicks_day}
                  />
                  <CustomListItem
                    icon={PhoneIcon}
                    title="Phone call clicks"
                    value={dataReport.phone_call_clicks_day}
                    backgroundColor="#E2E8F0"
                  />
                </div>
              </Paper>
              <Grid item sm={12} md={12} lg={12} className={classes.item}>
                <Grid
                  container
                  item
                  style={{
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white',
                  }}
                >
                  <Grid item sm={7} md={7} lg={7} style={{ padding: '20px' }}>
                    <div className={classes.chartTitle}>
                      {' '}
                      Audience age distribution
                      {' '}
                    </div>
                    <div className={classes.subChartTitle}>Followers/ Age </div>
                    <div>
                      {AgeAudienceData.map((item) => (
                        <div
                          key={item.id}
                          className={classes.containerLegendChart}
                        >
                          <LegendChartCustom
                            name={item.name}
                            color={item.color}
                            type="circle"
                          />
                          <span>{`${item.value} (${item.y}%)`}</span>
                        </div>
                      ))}
                    </div>
                  </Grid>
                  <Grid
                    item
                    sm={5}
                    md={5}
                    lg={5}
                    className={classes.chartContainer}
                  >
                    <Chart data={AgeAudienceData} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default InstagramReport;

const Container = styled.div`
  background-color: #f7f9fa;
`;
