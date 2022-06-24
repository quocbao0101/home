import React, { useEffect } from 'react';
import {
  Grid, makeStyles, Paper, Typography, Divider, Select, MenuItem,
} from '@material-ui/core';
import StatisticsCard from 'components/StatisticsCard';
import AOVChart from 'pages/GeneralInformationChart/AOVChart';
import GrowthRateChart from 'pages/GeneralInformationChart/GrowthRateChart';
import DonutChart from 'pages/GeneralInformationChart/DonutChart';
import LegendChartCustom from 'components/LegendChartCustom';
import RegionPieChart from 'pages/GeneralInformationChart/RegionPieChart';
import { useInput } from 'hooks/input.hooks';
import saleIconOne from 'assets/icons/saleOneIcon.png';
import saleIconTwo from 'assets/icons/saleTwoIcon.png';
import saleIconThree from 'assets/icons/saleThree.png';
import saleIconFour from 'assets/icons/saleFourIcon.png';
import saleIconFive from 'assets/icons/saleFiveIcon.png';
import HeaderContent from 'components/HeaderContent';
import DateRangePicker from 'components/DateRangePicker';
import { useDispatch, useSelector } from 'react-redux';
import getDataGeneralInformation from 'modules/GeneralInformation/action';
import formatFloat from 'utils/FormatFloat';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  mt: {
    marginTop: theme.spacing(3),
  },

  RightContent: {
    margin: theme.spacing(2, 0, 2, 0),
  },

  headpaper: {
    position: 'relative',
    padding: theme.spacing(2),
    width: '100%',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  flexItem: {
    width: '19%',
  },

  containerCard: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  chartContainer: {
    marginTop: theme.spacing(3),
  },

  chart: {
    position: 'relative',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  chartTitle: {
    padding: theme.spacing(2),
    fontSize: '18px',
    fontWeight: 700,
    width: '100%',
    textAlign: 'left',
  },

  legendPie: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  label: {
    fontSize: '16px',
    fontWeight: 700,
    margin: '10px 0px',
  },

  arrow: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },

  statusDonutlegend: {
    marginTop: 10,
    padding: 10,
    width: '70%',
    border: 'solid 1px #E2E8F0',
    borderRadius: 4,
  },

  legendGroupItem: {
    width: '70%',
    padding: 10,
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
  ],
  active: 'General Information',
};
function GenneralInformation() {
  const classes = useStyles();
  const { value: view, onChange: setView } = useInput('day');
  const dispatch = useDispatch();
  const dataReportOverviewList = useSelector((state) => state.generalInformation.data);
  const dataCustomerList = useSelector((state) => state.generalInformation.dataCusByChannel);
  const dataRegionList = useSelector((state) => state.generalInformation.dataRateByRegion);
  const dataAOVList = useSelector((state) => state.generalInformation.dataAOV);
  const dataGrowRateList = useSelector((state) => state.generalInformation.dataGrowRate);
  const dataAOVTotal = [];
  const dataAOVOnline = [];
  const dataAOVOffline = [];
  const dataAOVFullDate = [];
  dataAOVList.forEach((element) => {
    const fullDate = moment(element.orderDayKey, 'YYYYMMDD');
    dataAOVFullDate.push(fullDate);
    dataAOVOnline.push(element.aovOnline);
    dataAOVOffline.push(element.aovOff);
    dataAOVTotal.push(element.aovTotal);
  });
  const dataGrowRateFullDate = [];
  const dataGrowRate = [];
  dataGrowRateList.forEach((element) => {
    const fullDate = moment(element.orderDateKey, 'YYYYMMDD');
    dataGrowRateFullDate.push(fullDate);
    dataGrowRate.push(element.growthRate);
  });

  const [setDateArray] = React.useState([]);
  dataRegionList.sort((a, b) => ((a.revenueRate < b.revenueRate) ? 1 : -1));
  const colorList = ['#023E8A', '#1A599B', '#3174AC', '#498FBD', '#61AACD', '#78C5DE', '#90E0EF'];
  const dataRegions = [];
  if (dataRegionList.length > 6) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
      const element = dataRegionList[i];
      const revenue = parseFloat(formatFloat(element.revenueRate));
      dataRegions.push({
        name: element.region,
        y: revenue,
        color: colorList[i],
      });
    }
  } else {
    const revenueOthers = parseFloat(formatFloat(100 - dataRegions.reduce((n, { y }) => n + y, 0)));
    const regionObject = {
      name: 'others',
      y: revenueOthers,
      color: colorList[6],
    };
    dataRegions.push(regionObject);
  }
  useEffect(() => {
    const date = {
      startDate: moment(new Date('2020-01-14')).format('YYYY-MM-DD'),
      endDate: moment(new Date('2020-02-14')).format('YYYY-MM-DD'),
    };
    dispatch(getDataGeneralInformation(date));
  }, []);
  const overViewData = [
    {
      id: 1,
      label: 'Total Revenue',
      data: {
        value: dataReportOverviewList.totalRevenue,
        type: 'vnd',
      },
      rate: {
        percent: 12,
        total: 'increase',
      },
      icon: saleIconOne,
    },
    {
      id: 2,
      label: 'Total Customer',
      data: {
        value: dataReportOverviewList.totalCustomer,
        type: '',
      },
      rate: {
        percent: 12,
        total: 'decrease',
      },
      icon: saleIconTwo,
    },
    {
      id: 3,
      label: 'Total Transaction',
      data: {
        value: dataReportOverviewList.totalTransaction,
        type: '',
      },
      rate: {
        percent: 12,
        total: 'decrease',
      },
      icon: saleIconThree,
    },
    {
      id: 4,
      label: 'Total Product',
      data: {
        value: dataReportOverviewList.totalProduct,
        type: 'vnd',
      },
      rate: {
        percent: 12,
        total: 'increase',
      },
      icon: saleIconFour,
    },
    {
      id: 5,
      label: 'Total Profit',
      data: {
        value: dataReportOverviewList.totalProfit,
        type: 'vnd',
      },
      rate: {
        percent: 12,
        total: 'increase',
      },
      icon: saleIconFive,
    },
  ];

  const totalCustomerOnlByOffData = [
    {
      name: 'Online',
      value: dataCustomerList.totalOnline,
      y: dataCustomerList.totalOnline,
      color: '#023E8A',
    },
    {
      name: 'Offline',
      value: dataCustomerList.totalOff,
      y: dataCustomerList.totalOff,
      color: '#0077B6',
    },
  ];

  const getDates = (startDate, stopDate) => {
    const dateList = [];
    const currentDate = new Date(startDate);
    const endDate = stopDate;
    while (currentDate <= endDate) {
      dateList.push(currentDate.getDate());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateList;
  };

  const handleGetRangeDateValue = (start, end) => {
    if (end === undefined) {
      setDateArray(getDates(start, start));
    } else {
      setDateArray(getDates(start, end));
      const date = {
        startDate: moment(start).format('YYYY-MM-DD'),
        endDate: moment(end).format('YYYY-MM-DD'),
      };
      dispatch(getDataGeneralInformation(date));
    }
  };

  return (
    <div>
      <HeaderContent
        breadcrumbsList={breadcrumbsList}
        title="General information"
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
            <DateRangePicker getValue={handleGetRangeDateValue} />
          </div>
        )}
      />

      <Grid container className={classes.containerCard}>
        {
          overViewData.map((item) => (
            <Grid item key={item.id} className={classes.flexItem}>
              <Paper className={classes.headpaper}>
                <StatisticsCard
                  title={item.label}
                  value={item.data.value}
                  rate={item.rate.percent}
                  type={item.data.type}
                  total={item.rate.total}
                  icon={item.icon}
                />
              </Paper>
            </Grid>
          ))
        }
      </Grid>
      <div className={classes.chartContainer}>
        <Grid container spacing={3}>

          <Grid item sm={12} md={7} lg={7} xl={7}>
            <Paper className={classes.chart}>
              <Typography className={classes.chartTitle}>
                Average Order Value (AOV)
              </Typography>
              <Divider />
              <AOVChart
                dataAOVTotal={dataAOVTotal}
                dataAOVOnline={dataAOVOnline}
                dataAOVOffline={dataAOVOffline}
                dataAOVFullDate={dataAOVFullDate}
              />
            </Paper>
          </Grid>

          <Grid item sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.chart}>
              <Typography className={classes.chartTitle}>
                Growth Rate
              </Typography>
              <Divider />
              <GrowthRateChart
                dataGrowRateFullDate={dataGrowRateFullDate}
                dataGrowRate={dataGrowRate}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.mt}>
          <Grid item sm={12} md={7} lg={7} xl={7}>
            <Paper className={classes.chart}>
              <Typography className={classes.chartTitle}>
                Customer By Channel
              </Typography>
              <Divider />
              <Grid container spacing={3}>
                <Grid item sm={4} md={6} lg={6} xl={6}>
                  <DonutChart
                    totalCustomerOnlByOffData={totalCustomerOnlByOffData}
                    dataCustomerList={dataCustomerList}
                  />
                </Grid>
                <Grid
                  item
                  sm={8}
                  md={6}
                  lg={6}
                  xl={6}
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item className={classes.legendGroupItem}>
                    <Typography className={classes.label}> Channel </Typography>
                    <LegendChartCustom
                      name="Online"
                      value={totalCustomerOnlByOffData[0].value}
                      color={totalCustomerOnlByOffData[0].color}
                      rate={12}
                      total="increase"
                      type="circle"
                    />
                    <LegendChartCustom
                      name="Ofline"
                      value={totalCustomerOnlByOffData[1].value}
                      color={totalCustomerOnlByOffData[1].color}
                      rate={12}
                      total="increase"
                      type="circle"
                    />
                  </Grid>
                  <Grid item className={classes.statusDonutlegend}>
                    <Typography className={classes.label}> Status </Typography>
                    <LegendChartCustom
                      name="New"
                      rate={12}
                      value={4811}
                      total="increase"
                    />
                    <LegendChartCustom
                      name="Lost"
                      value={1248}
                      rate={12}
                    />
                  </Grid>
                </Grid>
              </Grid>

            </Paper>
          </Grid>
          <Grid item sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.chart}>
              <Typography className={classes.chartTitle}>
                Revenue rate by Region
              </Typography>
              <Divider />
              <Grid container spacing={3}>
                <Grid item sm={6} md={7} lg={7}>
                  <RegionPieChart dataRegions={dataRegions} />
                </Grid>
                <Grid
                  item
                  sm={6}
                  md={5}
                  lg={5}
                  container
                  alignItems="center"
                >
                  <Grid item>
                    {
                    dataRegions.map((item) => (
                      <LegendChartCustom
                        key={item}
                        name={item.name}
                        color={item.color}
                        type="circle"
                      />
                    ))
                  }
                  </Grid>
                </Grid>
              </Grid>

            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GenneralInformation;
