import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts from 'highcharts/highstock';
import React from 'react';
import PropTypes from 'prop-types';

HighchartsMore(Highcharts);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    color: theme.palette.text.secondary,
    minHeight: 400,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    borderBottom: '1px solid #F1F5F9',
    padding: theme.spacing(0, 2),
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1E293B',
  },

  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },
}));

function ColumnChart({ title, data, columnColor }) {
  const classes = useStyles();
  const optionsCloumnrageChart = {
    chart: {
      type: 'column',
      // height: 500,
      marginTop: 50,
    },
    title: '',
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      labels: {
        formatter() {
          const that = this;
          return that.value;
        },
      },
      min: 0,
      title: {
        text: '',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '<b>{point.y}</b>',
    },
    plotOptions: {
      column: {
        color: columnColor,
      },
    },
    series: [{
      name: 'Population',
      data,
      dataLabels: {
        enabled: false,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    }],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <Typography className={classes.title}>
          { title }
        </Typography>
      </div>
      <div className={classes.content}>
        <Grid>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsCloumnrageChart}
          />
        </Grid>
      </div>
    </div>
  );
}

export default ColumnChart;

ColumnChart.defaultProps = {
  columnColor: '',
};

ColumnChart.propTypes = {
  title: PropTypes.string.isRequired,
  columnColor: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.any),
  ).isRequired,
};
