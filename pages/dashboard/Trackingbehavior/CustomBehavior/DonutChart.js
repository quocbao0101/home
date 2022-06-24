import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts from 'highcharts/highstock';
import React from 'react';
import PropTypes from 'prop-types';
import toCurrency from 'utils/FormatNumber';
import LegendChartCustom from 'components/LegendChartCustom';
import { useSelector } from 'react-redux';

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

  titleContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 99999,
  },

  chartTitle: {
    fontSize: '18',
    // [theme.breakpoints.down('md')]: {
    //   fontSize: 16,
    // },
    color: '#1E293B',
  },

  chartSubTitle: {
    fontSize: 14,
    color: '#64748B',
  },

  chartValue: {
    fontSize: 21,
    color: '#1E293B',
  },

}));

function DonutChart({ title, data }) {
  const classes = useStyles();
  const options = {
    chart: {
      type: 'pie',
      zoomType: 'xy',
    },

    title: '',

    // title: {
    //   text: `
    //     <span style="font-size: 18px; color: #1E293B;">Total Order<span> <br/>
    //     <span style="font-size: 13px; color: #64748B;">(add to cart)<span>
    //     <br/>
    //     <div>
    //       <b style="font-size: 24px; color: #1E293B;">${toCurrency(44399)}</b>
    //     </div>
    //   `,
    //   verticalAlign: 'middle',
    // },

    xAxis: {
      angle: 90,
    },

    tooltip: {
      formatter() {
        const that = this;
        return `<span style="color:${that.color}">\u25CF</span> <b> ${that.point.name}</b><br/>`
        + `<b>${toCurrency(that.point.value)} - ${that.y}% </b> <br/>`;
      },
    },

    plotOptions: {
      series: {
        pointStart: 0,
        dataLabels: {
          enabled: false,
          format: '{y}%',
          distance: -20,
        },
      },
      pie: {
        size: '100%',
        startAngle: 0,
      },
    },

    series: [{
      minPointSize: 10,
      innerSize: '60%',
      zMin: 0,
      name: 'countries',
      data,
    }],

    credits: {
      enabled: false,
    },
  };
  const dataAddToCart = useSelector((state) => state.trackingBehavior.data.addToCarts);
  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <Typography className={classes.title}>
          { title }
        </Typography>
      </div>
      <div className={classes.content}>
        <Grid container>
          <Grid item sm={8} md={8} lg={8} style={{ position: 'relative' }}>
            <div className={classes.titleContainer}>
              <Typography className={classes.chartTitle}>Total Order</Typography>
              <Typography className={classes.chartSubTitle}>(Add to cart)</Typography>
              <Typography className={classes.chartValue}>
                {dataAddToCart.totalOrder}
              </Typography>
            </div>
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

export default DonutChart;

DonutChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      y: PropTypes.number,
      color: PropTypes.string,
    }),
  ).isRequired,
};
