import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Typography,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import toCurrency from 'utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    minHeight: 400,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    justifyContent: 'flex-start',
    height: 60,
    borderBottom: '1px solid #F1F5F9',
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1E293B',
  },
  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },

  productItem: {
    '&:not(:last-child)': {
      borderBottom: 'solid 1px #E2E8F0',
    },
  },

}));
const data = [
  {
    Product: 'Kappa dép quai ngang 351559W ',
    link: '/nam/dep/dep-quai-ngang',
    access_times: '7555',
  },
  {
    Product: 'Replay áo khoác thun nam M3322',
    link: '/nam/ao/ao-khoac-thun',
    access_times: '6457',
  },
  {
    Product: 'Dr. Martens dép nam 21115001',
    link: '/nam/dep/dep-quai-ngang',
    access_times: '5754',
  },
  {
    Product: 'Superga giày cổ cao nữ 121SSWS',
    link: '/nu/giay/giay-cao-co',
    access_times: '5862',
  },
  {
    Product: 'Staple áo khóac jean nam 2102O',
    link: '/nam/ao/ao-khoac',
    access_times: '4569',
  },
];
function TopVisitedProducts() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <Typography className={classes.title}> Top 5 number of visitor by branch </Typography>
      </div>
      <div className={classes.content}>
        {data.map((menuitem) => (
          <Grid key={menuitem.Product} className={classes.productItem}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid>
                <Title>
                  {menuitem.Product}
                </Title>
                <Text>
                  {menuitem.link}
                </Text>
              </Grid>
              <Grid>
                <Typography style={{ color: '#1E293B', fontSize: 16 }}>
                  {toCurrency(menuitem.access_times)}
                  {' '}
                  <span style={{ color: '#64748B' }}>
                    lượt
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default TopVisitedProducts;

const Title = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-style: bold;
  color: #000000;
`;
const Text = styled.p`
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-weight: normal;
  color: #9D9D9D;
`;
