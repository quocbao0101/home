import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

function Chart(props) {
  const { data } = props;
  const options = {
    chart: {
      type: 'pie',
      height: 200,
      width: 200,
    },

    title: {
      text: '',
    },

    xAxis: {
      angle: 90,
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>'
                + 'Total: <b>{point.y} % Customer</b><br/>',
    },

    plotOptions: {
      series: {
        pointStart: 200,
        dataLabels: {
          enabled: false,
        },
      },
      pie: {
        size: 150,
        startAngle: 270,
      },
    },

    series: [{
      minPointSize: 10,
      innerSize: '80%',
      zMin: 0,
      name: 'countries',
      data,
    }],
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
Chart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Chart;
