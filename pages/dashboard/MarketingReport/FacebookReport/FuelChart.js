import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid,
} from '@material-ui/core';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Funnel from 'highcharts/modules/funnel';
// import styled from 'styled-components';

Funnel(Highcharts);
HighchartsMore(Highcharts);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100%',
  },
  scollcontent: {
    overflowY: 'auto',
  },
}));

function FuelChart() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const optionsCloumnChart = {
    chart: {
      type: 'funnel',
      height: '130px',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
        },
        center: ['55%', '50%'],
        neckWidth: '20%',
        neckHeight: ['0%', '0%'],
        width: '85%',
      },
    },
    legend: {
      enabled: false,
    },
    series: [{
      name: 'Ads funnel',
      data: [{
        y: 2301,
        name: 'Impressions',
        color: '#68c2c8',
      }, {
        y: 6780,
        name: 'Reach',
        color: '#475d7d',
      }, {
        y: 575,
        name: 'Clicks',
        color: '#f5be60',
      }],

    }],
  };
  useEffect(() => {
    // dispatch(getNews());
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid>
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsCloumnChart}
        />
      </Grid>
    </Paper>
  );
}

export default FuelChart;
// const Container = styled.div`
//   margin-top: 70px;
// `;
// const Title = styled.p`
//   font-size: 18px;
//   font-weight: 750;
//   font: bold;
//   margin-bottom: 15px;
//   color: #566d8b;
// `;
// const RightContent = styled.div`
//   display: inherit;
//   align-items: center;
// `;
