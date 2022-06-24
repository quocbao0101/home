import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import getNews from 'modules/dashboard/actions';
import Overview from './Overview';
import BehaviorAnalytics from './BehaviorAnalytics';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.defaultProps = {
  children: '',
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
  },
  appBar: {
    boxShadow: 'none',
  },
  tabBar: {
    backgroundColor: '#fafafa',
    color: '#000000',
  },
  tabChildren: {
    textTransform: 'inherit',
    fontSize: '16px',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.news);
  const loading = useSelector((state) => state.dashboard.loading);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabBar} indicatorColor="primary">
          <Tab className={classes.tabChildren} label="Tổng Quan" {...a11yProps(0)} />
          <Tab className={classes.tabChildren} label="Hành vi khách hàng" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview data={data} loading={loading} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BehaviorAnalytics />
      </TabPanel>
    </div>
  );
}
