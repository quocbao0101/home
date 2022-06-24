import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Funnel from 'highcharts/modules/funnel';
import { useDispatch, useSelector } from 'react-redux';
import getDataGA from 'modules/GaReport/action';

Funnel(Highcharts);
HighchartsMore(Highcharts);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginTop: 20,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary,
//   },
//   scollcontent: {
//     overflowY: 'auto',
//   },
// }));

function ChannelChart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.gaReport.data);

  useEffect(() => {
    dispatch(getDataGA());
  }, []);
  const optionsDonutChart = {
    chart: {
      renderTo: 'container',
      type: 'pie',
      height: 300,
      padding: 20,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'BY',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontFamily: 'Open Sans',
        fontSize: 20,
        fontStyle: 'normal',
        align: 'center',
      },
      x: -50,
      y: 0,
    },
    subtitle: {
      text: 'CHANNELS',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 700,
        align: 'center',
        paddingTop: 10,
      },
      x: -50,
      y: 20,
    },
    tooltip: {
      shared: true,
      useHTML: true,
      padding: 12,
      borderRadius: 30,
      borderColor: '#e3e3e3',
      headerFormat: '',
      pointFormat: `${'<span style="text-transform:uppercase;font-weight:300">{point.name} search:</span> <b> {point.percentage:.1f} %</b><br/>'
              + '<br><span style="font-size: 11">USERS:</span><b font-weight:700">{point.y}</b> <span style="color: #4CFA9D">▲</span><span style="font-size:11; color: #010101">(12% so với tháng trước)</span><br/>'}`,
    },
    legend: {
      itemDistance: 10,
      verticalAlign: 'bottom',
      x: -10,
      y: 21,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
      series: {
        center: ['40%', '50%'],
      },
      variablepie: {
        shadow: false,
        allowPointSelect: true,
        cursor: 'pointer',
      },
    },
    series: [{
      name: 'Reported',
      colorByPoint: true,
      data: [{
        name: 'Social',
        y: data.acquisitionPipeChart.social,
        color: '#023E8A',
        selected: true,
      }, {
        name: 'Organic',
        y: data.acquisitionPipeChart.organic,
        color: '#0077B6',
      }, {
        name: 'Direct',
        y: data.acquisitionPipeChart.direct,
        color: '#00B4D8',
      }, {
        name: 'Paid',
        y: data.acquisitionPipeChart.paid,
        color: '#90E0EF',
      }, {
        name: 'Referral',
        y: data.acquisitionPipeChart.referral,
        color: '#D3F7FF',
      }],
      size: '120%',
      innerSize: '45%',
      dataLabels: {
        enabled: true,
        formatter() {
          const chart = this;
          return `${Math.round(chart.percentage * 100) / 100} %`;
        },
        distance: -40,
        color: 'black',
      },
    }],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsDonutChart}
    />
  );
}

export default ChannelChart;
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
