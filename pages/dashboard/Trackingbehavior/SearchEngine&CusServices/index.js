import React from 'react';
import {
  Grid,
  makeStyles, MenuItem, Paper, Select, Typography,
} from '@material-ui/core';
import DateRangePicker from 'components/DateRangePicker';
import { useInput } from 'hooks/input.hooks';
import StatisticsCard from 'components/StatisticsCard';
import serviceIconOne from 'assets/icons/serviceOne.png';
import serviceIconTwo from 'assets/icons/serviceTwo.png';
import serviceIconThree from 'assets/icons/serviceThree.png';
import serviceIconFour from 'assets/icons/serviceFour.png';
import serviceIconFive from 'assets/icons/serviceFive.png';
import TopSearch from './TopSearch';
import TopTrending from './TopTrending';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    position: 'relative',
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
    textAlign: 'center',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },

  gridItem: {
    width: '49%',
  },

  paper: {
    width: '100%',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    minHeight: 400,
  },

}));

const overViewData = [
  {
    id: 1,
    label: 'Click Customer service',
    data: {
      value: 3726,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'increase',
    },
    icon: serviceIconOne,
  },
  {
    id: 2,
    label: 'Click introduction',
    data: {
      value: 1612,
      type: '',
    },
    rate: {
      percent: 11,
      total: 'decrease',
    },
    icon: serviceIconTwo,
  },
  {
    id: 3,
    label: 'Click thumbs up',
    data: {
      value: 1068,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'decrease',
    },
    icon: serviceIconThree,
  },
  {
    id: 4,
    label: 'Total review',
    data: {
      value: 1021,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'increase',
    },
    icon: serviceIconFour,
  },
  {
    id: 5,
    label: 'Total comment',
    data: {
      value: 1759,
      type: '',
    },
    rate: {
      percent: 12,
      total: 'increase',
    },
    icon: serviceIconFive,
  },
];

const topTrendingData = [
  {
    Id: 0,
    Product: 'Dr. Martens',
    quantity: '100',
  },
  {
    Id: 1,
    Product: 'Superga',
    quantity: '90',
  },
  {
    Id: 2,
    Product: 'Kappa',
    quantity: '234',
  },
  {
    Id: 3,
    Product: 'Giày thể thao',
    quantity: '97',
  },
  {
    Id: 4,
    Product: 'Áo khoác gió',
    quantity: '94',
  },
  {
    Id: 5,
    Product: 'Áo nỉ',
    quantity: '92',
  },
  {
    Id: 6,
    Product: 'Quần jeans',
    quantity: '98',
  },
  {
    Id: 7,
    Product: 'Đầm',
    quantity: '90',
  },
  {
    Id: 8,
    Product: 'Quần shorts thể thao',
    quantity: '92',
  },
  {
    Id: 9,
    Product: 'Giày lười',
    quantity: '70',
  },
  {
    Id: 10,
    Product: 'Quần khaki',
    quantity: '89',
  },
  {
    Id: 11,
    Product: 'Giày cao cổ',
    quantity: '78',
  },
  {
    Id: 12,
    Product: 'Giày xăng đan',
    quantity: '4569',
  },
  {
    Id: 13,
    Product: 'Quần khaki',
    quantity: '45',
  },
  {
    Id: 14,
    Product: 'Chân váy',
    quantity: '78',
  },
  {
    Id: 15,
    Product: 'Quần thể thao',
    quantity: '97',
  },
  {
    Id: 16,
    Product: 'Giày sneakers',
    quantity: '67',
  },
  {
    Id: 17,
    Product: 'Dr. Martens',
    quantity: '100',
  },
  {
    Id: 18,
    Product: 'Superga',
    quantity: '90',
  },
  {
    Id: 19,
    Product: 'Kappa',
    quantity: '234',
  },
  {
    Id: 20,
    Product: 'Giày thể thao',
    quantity: '97',
  },
  {
    Id: 21,
    Product: 'Áo khoác gió',
    quantity: '94',
  },
  {
    Id: 22,
    Product: 'Áo nỉ',
    quantity: '92',
  },
  {
    Id: 23,
    Product: 'Quần jeans',
    quantity: '98',
  },
  {
    Id: 24,
    Product: 'Đầm',
    quantity: '90',
  },
  {
    Id: 25,
    Product: 'Quần shorts thể thao',
    quantity: '92',
  },
  {
    Id: 26,
    Product: 'Giày lười',
    quantity: '70',
  },
  {
    Id: 27,
    Product: 'Quần khaki',
    quantity: '89',
  },
  {
    Id: 28,
    Product: 'Giày cao cổ',
    quantity: '78',
  },
  {
    Id: 29,
    Product: 'Giày xăng đan',
    quantity: '4569',
  },
  {
    Id: 30,
    Product: 'Quần khaki',
    quantity: '45',
  },
  {
    Id: 31,
    Product: 'Chân váy',
    quantity: '78',
  },
  {
    Id: 32,
    Product: 'Quần thể thao',
    quantity: '97',
  },
  {
    Id: 33,
    Product: 'Giày sneakers',
    quantity: '67',
  },
];

const topSearchData = [
  {
    Id: 0,
    Product: 'Dr. Martens',
    quantity: '100',
  },
  {
    Id: 1,
    Product: 'Superga',
    quantity: '90',
  },
  {
    Id: 2,
    Product: 'Kappa',
    quantity: '234',
  },
  {
    Id: 3,
    Product: 'Giày thể thao',
    quantity: '97',
  },
  {
    Id: 4,
    Product: 'Áo khoác gió',
    quantity: '94',
  },
  {
    Id: 5,
    Product: 'Áo nỉ',
    quantity: '92',
  },
  {
    Id: 6,
    Product: 'Quần jeans',
    quantity: '98',
  },
  {
    Id: 7,
    Product: 'Đầm',
    quantity: '90',
  },
  {
    Id: 8,
    Product: 'Quần shorts thể thao',
    quantity: '92',
  },
  {
    Id: 9,
    Product: 'Giày lười',
    quantity: '70',
  },
  {
    Id: 10,
    Product: 'Quần khaki',
    quantity: '89',
  },
  {
    Id: 11,
    Product: 'Giày cao cổ',
    quantity: '78',
  },
  {
    Id: 12,
    Product: 'Giày xăng đan',
    quantity: '4569',
  },
  {
    Id: 13,
    Product: 'Quần khaki',
    quantity: '45',
  },
  {
    Id: 14,
    Product: 'Chân váy',
    quantity: '78',
  },
  {
    Id: 15,
    Product: 'Quần thể thao',
    quantity: '97',
  },
  {
    Id: 16,
    Product: 'Giày sneakers',
    quantity: '67',
  },
  {
    Id: 17,
    Product: 'Dr. Martens',
    quantity: '100',
  },
  {
    Id: 18,
    Product: 'Superga',
    quantity: '90',
  },
  {
    Id: 19,
    Product: 'Kappa',
    quantity: '234',
  },
  {
    Id: 20,
    Product: 'Giày thể thao',
    quantity: '97',
  },
  {
    Id: 21,
    Product: 'Áo khoác gió',
    quantity: '94',
  },
  {
    Id: 22,
    Product: 'Áo nỉ',
    quantity: '92',
  },
  {
    Id: 23,
    Product: 'Quần jeans',
    quantity: '98',
  },
  {
    Id: 24,
    Product: 'Đầm',
    quantity: '90',
  },
  {
    Id: 25,
    Product: 'Quần shorts thể thao',
    quantity: '92',
  },
  {
    Id: 26,
    Product: 'Giày lười',
    quantity: '70',
  },
  {
    Id: 27,
    Product: 'Quần khaki',
    quantity: '89',
  },
  {
    Id: 28,
    Product: 'Giày cao cổ',
    quantity: '78',
  },
  {
    Id: 29,
    Product: 'Giày xăng đan',
    quantity: '4569',
  },
  {
    Id: 30,
    Product: 'Quần khaki',
    quantity: '45',
  },
  {
    Id: 31,
    Product: 'Chân váy',
    quantity: '78',
  },
  {
    Id: 32,
    Product: 'Quần thể thao',
    quantity: '97',
  },
  {
    Id: 33,
    Product: 'Giày sneakers',
    quantity: '67',
  },
];

function SearchEngineAndCustomService() {
  const classes = useStyles();
  const { value: view, onChange: setView } = useInput('day');

  const handleGetRangeDateValues = (start, end) => {
    console.log({ start, end });
  };
  return (
    <div className={classes.container}>
      <div className={classes.subHeaderContainer}>
        <div>
          <Typography className={classes.subTitle}>Search Engine and Customer Services</Typography>
        </div>
        <Grid className={classes.rightContent}>
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
          <DateRangePicker getValue={handleGetRangeDateValues} />
        </Grid>
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
        justifyContent="space-between"
        style={{ marginBottom: 20 }}
      >
        <Grid item className={classes.gridItem}>
          <Paper className={classes.paper}>
            <TopTrending data={topTrendingData} />
          </Paper>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Paper className={classes.paper}>
            <TopSearch data={topSearchData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchEngineAndCustomService;
