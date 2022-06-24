import DateRangePicker from 'components/DateRangePicker';
import HeaderContent from 'components/HeaderContent';

import React, { useEffect } from 'react';
import { useInput } from 'hooks/input.hooks';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews';

import {
  AppBar,
  Box,
  Button,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@material-ui/core';
import TabPanel from 'components/TabPanel';

import { Link } from 'react-router-dom';
import getDataGA from 'modules/GaReport/action';
import { useDispatch, useSelector } from 'react-redux';
import GeneralData from './GeneralData/GeneralData';
import WebReportMore from './more/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },

  headpaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
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
    marginLeft: 20,
  },
  textbox: {
    color: '#1E293B',
    fontSize: '24px',
    fontWeight: 700,
  },
  span: {
    color: '#8D9297',
    fontSize: '15px',
    marginLeft: '5px',
  },
  header: {
    backgroundColor: '#E2E8F066',
    marginTop: '20px',
    height: '62px',
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
  textmore: {
    textDecoration: 'none',
    fontSize: '14',
  },

  container: {
    '& .MuiBox-root': {
      padding: 0,
    },
    '& .MuiTab-root': {
      padding: '16px 12px',
    },
  },

  appbar: {
    backgroundColor: '#fafafa',
    marginBottom: '20px',
    '&.MuiPaper-elevation4': {
      boxShadow: 'none !important',
    },
  },

  analyticsTab: {
    minWidth: 0,
    '& .MuiTab-wrapper': {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 500,
    },
    '&.Mui-selected': {
      color: '#0096C7',
    },
  },
  generalTab: {
    minWidth: 0,
    marginRight: 10,
    '& .MuiTab-wrapper': {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 500,
    },
    '&.Mui-selected': {
      color: '#0096C7',
    },
  },
  subHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -18,
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
}));
const breadcrumbsList = {
  list: [
    { text: 'BI Dashboard', link: '/dashboard' },
    { text: 'Marketing report', link: '/dashboard/marketing_report' },
  ],
  active: 'Website report',
};
function Marketingreport() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.gaReport.data);

  useEffect(() => {
    dispatch(getDataGA());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const { value: view, onChange: setView } = useInput('day');
  const handleGetRangeDateValue = (start, end) => {
    console.log({ start, end });
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
      <div>
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
              <Box className={classes.textbox}>
                Website
                <span className={classes.span}>(hoangphuc.com)</span>
              </Box>
            </Box>
          </Grid>
          <Grid className={classes.gridmore}>
            <Link to="/dashboard/marketing_report" className={classes.textmore}>
              <Button className={classes.back}>Back</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className={classes.tabPanelContainer}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#0096C7',
                height: '3px',
              },
            }}
            textColor="primary"
          >
            <Tab label="General Data" className={classes.generalTab} />
            <Tab label="Data analytics" className={classes.analyticsTab} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <GeneralData data={data} />
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <WebReportMore data={data} />
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default Marketingreport;
