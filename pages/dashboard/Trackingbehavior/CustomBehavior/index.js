import React from 'react';
import {
  Grid,
  makeStyles, MenuItem, Paper, Select, Typography,
} from '@material-ui/core';
import DateRangePicker from 'components/DateRangePicker';
import { useInput } from 'hooks/input.hooks';
import behaviorIconOne from 'assets/icons/behaviorOne.png';
import behaviorIconTwo from 'assets/icons/behaviorTwo.png';
import behaviorIconThree from 'assets/icons/behaviorThree.png';
import behaviorIconFour from 'assets/icons/behaviorFour.png';
import behaviorIconFive from 'assets/icons/behaviorFive.png';
import StatisticsCard from 'components/StatisticsCard';
import formatFloat from 'utils/FormatFloat';
import PropTypes from 'prop-types';
import TopVisitedProducts from './TopVisitedProducts';
import TopVisitedCategory from './TopVisitedCategory';
import ColumnChart from './ColumnChart';
import DonutChart from './DonutChart';
import PieChart from './PieChart';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },

  subHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },

  subTitle: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: '"Inter", sans-serif',
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

  viewText: {
    marginRight: 10,
    color: '#64748B',
    fontSize: 14,
    fontWeight: 400,
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

  containerCard: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },

  flexItem: {
    width: '19%',
  },

  headpaper: {
    position: 'relative',
    padding: theme.spacing(2),
    width: '100%',
    color: theme.palette.text.secondary,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  paper: {
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    minHeight: 420,
  },

}));

function CustomBehavior(props) {
  const { data } = props;
  const classes = useStyles();
  const { value: view, onChange: setView } = useInput('day');

  const handleGetRangeDateValue = (start, end) => {
    console.log({ start, end });
  };
  const visitorData = [{
    id: 1,
    name: 'Dr.Martens',
    y: 53,
    z: 250,
    color: '#023E8A',
    rate: 12,
    total: 'increase',
  }, {
    id: 2,
    name: 'Kappa',
    y: 20,
    z: 210,
    color: '#0077B6',
    rate: 11,
    total: 'decrease',
  }, {
    id: 3,
    name: 'Repplay',
    y: 12,
    z: 180,
    color: '#0096C7',
    rate: 12,
    total: 'increase',
  }, {
    id: 4,
    name: 'Sugarga',
    y: 8,
    z: 170,
    color: '#00B4D8',
    rate: 12,
    total: 'increase',
  }, {
    id: 5,
    name: 'Staple',
    y: 7,
    z: 150,
    color: '#90E0EF',
    rate: 11,
    total: 'decrease',
  },
  ];
  const overViewData = [
    {
      id: 1,
      label: 'Purchased click',
      data: {
        value: data.purchaseClick.PurchaseClick,
        type: 'percent',
      },
      rate: {
        percent: 12,
        total: 'increase',
      },
      icon: behaviorIconOne,
    },
    {
      id: 2,
      label: 'Cancel rate',
      data: {
        value:
        formatFloat(data.cancelRate.CancelRate),
        type: 'percent',
      },
      rate: {
        percent: 12,
        total: 'decrease',
      },
      icon: behaviorIconTwo,
    },
    {
      id: 3,
      label: 'Total visited on site',
      data: {
        value: data.totalvisited.TotalVisitedOnSite,
        type: '',
      },
      rate: {
        percent: 12,
        total: 'decrease',
      },
      icon: behaviorIconThree,
    },
    {
      id: 4,
      label: 'Total time on site',
      data: {
        value: data.timeOnSite.TimeOnSite,
        type: 'time',
      },
      rate: {
        percent: 12,
        total: 'increase',
      },
      icon: behaviorIconFour,
    },
    {
      id: 5,
      label: 'Total click campaign ',
      data: {
        value: data.campaign.ClickCampaign,
        type: '',
      },
      rate: {
        percent: 11,
        total: 'decrease',
      },
      icon: behaviorIconFive,
    },
  ];
  const eventStaticData = [
    ['Page views', data.eventStatistics.pageView],
    // ['Content views', 1300],
    // ['Submit contact', 1700],
    ['Product views', data.eventStatistics.productView],
    ['Add to cart', data.eventStatistics.addToCart],
    ['Checkout', data.eventStatistics.checkout],
    ['First purcharse', data.eventStatistics.firstPurchase],
  ];
  const onlineCustomerData = [
    ['New visitor', 2200],
    ['Engaged vistor', 2200],
    ['Customer lead', 1800],
    ['Prospective customer', 4100],
    ['First time customer', 3100],
    ['Repeat customer', 3500],
  ];
  const addToCartData = [
    {
      id: 1,
      name: 'Completed Successfully',
      value: data.addToCarts.completedSuccessfully,
      y: data.addToCarts.completedSuccessfully,
      color: '#023E8A',
      rate: 12,
      total: 'increase',
    },
    {
      id: 2,
      name: 'Cancel/ \nPending',
      value: data.addToCarts.cancel,
      y: data.addToCarts.cancel,
      color: '#0077B6',
      rate: 11,
      total: 'decrease',
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.subHeaderContainer}>
        <div>
          <Typography className={classes.subTitle}>Customer behaviors</Typography>
        </div>
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

      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="space-between"
        style={{ marginBottom: 20 }}
      >
        <Grid item sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <TopVisitedProducts />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <TopVisitedCategory />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <PieChart title="Ordered/Cancel - Pending (add to cart)" data={visitorData} />
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        style={{ marginBottom: 20 }}
      >
        <Grid item sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <ColumnChart data={eventStaticData} title="Event Statistics" columnColor="#00B4D8" />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <ColumnChart
              data={onlineCustomerData}
              title="Online Customer Engagement"
              columnColor="#0077B6"
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <DonutChart title="Ordered/Cancel - Pending (add to cart)" data={addToCartData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CustomBehavior.defaultProps = {
  data: {},
};

CustomBehavior.propTypes = {
  data: PropTypes.shape({
    purchaseClick: PropTypes.shape({
      PurchaseClick: PropTypes.number,
    }),
    cancelRate: PropTypes.shape({
      CancelRate: PropTypes.number,
    }),
    totalvisited: PropTypes.shape({
      TotalVisitedOnSite: PropTypes.number,
    }),
    timeOnSite: PropTypes.shape({
      TimeOnSite: PropTypes.number,
    }),
    campaign: PropTypes.shape({
      ClickCampaign: PropTypes.number,
    }),
    // visitorProducts: PropTypes.arrayOf(),
    eventStatistics: PropTypes.shape({
      pageView: PropTypes.number,
      addToCart: PropTypes.number,
      checkout: PropTypes.number,
      productView: PropTypes.number,
      firstPurchase: PropTypes.number,
    }),
    addToCarts: PropTypes.shape({
      totalOrder: PropTypes.number,
      completedSuccessfully: PropTypes.number,
      cancel: PropTypes.number,
    }),
  }),
};

export default CustomBehavior;
