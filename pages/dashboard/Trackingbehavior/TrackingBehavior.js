import {
  AppBar,
  makeStyles, Tab, Tabs, useTheme,
} from '@material-ui/core';
import HeaderContent from 'components/HeaderContent';
import TabPanel from 'components/TabPanel';
import getDataTrackingBehavior from 'modules/TrackingBehavior/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import CustomBehavior from './CustomBehavior/index';
import SearchEngineAndCustomService from './SearchEngine&CusServices/index';

const useStyles = makeStyles(() => ({
  container: {
    '& .MuiBox-root': {
      padding: 0,
    },
    '& .MuiTab-root': {
      padding: '16px 12px',
    },
  },

  appbar: {
    backgroundColor: 'rgba(226, 232, 240, 0.4)',
    '&.MuiPaper-elevation4': {
      boxShadow: 'none !important',
    },
  },

  searchEngineTab: {
    minWidth: 315,
    '& .MuiTab-wrapper': {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 400,
    },
    '&.Mui-selected': {
      color: '#0096C7',
    },
  },
  customTab: {
    '& .MuiTab-wrapper': {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 400,
    },
    '&.Mui-selected': {
      color: '#0096C7',
    },
  },
}));
const breadcrumbsList = {
  list: [
    { text: 'BI Dashboard', link: '/dashboard' },
  ],
  active: 'Tracking behavior',
};

function TrackingBehavior() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.trackingBehavior.data);
  useEffect(() => {
    dispatch(getDataTrackingBehavior());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={classes.container}>
      <HeaderContent
        title="Tracking behavior"
        breadcrumbsList={breadcrumbsList}
      />

      <div className={classes.tabPanelContainer}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#0096C7',
              },
            }}
            textColor="primary"
          >
            <Tab label="Customer behaviors" className={classes.customTab} />
            <Tab label="Search Engine and Customer Services" className={classes.searchEngineTab} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <CustomBehavior data={data} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SearchEngineAndCustomService data={data} />
          </TabPanel>
        </SwipeableViews>
      </div>

    </div>
  );
}

export default TrackingBehavior;
