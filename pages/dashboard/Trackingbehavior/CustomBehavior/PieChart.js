import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts from 'highcharts/highstock';
import React from 'react';
import PropTypes from 'prop-types';
import LegendChartCustom from 'components/LegendChartCustom';

HighchartsMore(Highcharts);

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    // minHeight: 400,
    zoomType: 'xy',
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

  responsive: {
    rules: [{
      condition: {
        maxWidth: 200,
      },
      chartOptions: {
        legend: {
          enabled: false,
        },
      },
    }],
  },

}));

function PieChart({ title, data }) {
  const classes = useStyles();
  const options = {
    chart: {
      type: 'pie',
      height: 300,
      margin: 5,
    },

    title: {
      text: '',
    },

    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>'
          + 'Total: <b>{point.y} %</b><br/>',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        size: '100%',
      },
    },

    series: [{
      dataLabels: {
        enabled: true,
        format: '{point.y} %',
        distance: -30,
        color: 'white',
      },
      minPointSize: 10,
      zMin: 0,
      name: 'countries',
      data,
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
        <Grid container>
          <Grid item sm={8} md={8} lg={8}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          </Grid>
          <Grid container item sm={4} md={4} lg={4} alignItems="center">
            <Grid item>
              {
                data.map((item) => (
                  <LegendChartCustom
                    key={item.id}
                    name={item.name}
                    color={item.color}
                    type="circle"
                    rate={item.rate}
                    total={item.total}
                    direction="column"
                  />
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PieChart;
PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.number,
      y: PropTypes.number,
      z: PropTypes.number,
      color: PropTypes.string,
      rate: PropTypes.number,
      total: PropTypes.string,
    }),
  ).isRequired,
};
