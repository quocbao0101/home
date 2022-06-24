import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import CustomTable from './CustomTable';
import CustomTableBorder from './CustomTableBorder';
import { campaignsData, paymentData, searchQueriesData } from './data';

const useStyles = makeStyles((theme) => ({
  RightContent: {
    margin: theme.spacing(2, 0, 2, 0),
  },

  text: {
    marginLeft: theme.spacing(2),
    color: '#686868',
    fontSize: '20px',
    fontWeight: 700,
    textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
  },

  btn: {
    borderRadius: '30px',
    fontWeight: 700,
  },
  container: {
    backgroundColor: '#fafafa',
  },
  headpaper: {
    paddingTop: '5px',
    paddingBottom: '30px',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    borderRadius: 4,
  },
}));
const columnName1 = ['Source medium', 'Sessions', 'Users', 'New users'];
const columnName2 = ['Page path', 'Sessions', 'Views', 'Users'];
const columnName3 = ['Search queries', 'KeyWord', 'Pageviews', 'Session'];
const columnName4 = ['ProductID', 'Branch', 'Category', 'Add to cart'];
const columnName5 = ['ProductID', 'Purchased', 'Cancelled', 'Pending'];
const columnName6 = ['Name', 'Clicks', 'Impressions', 'CTR', 'Cost'];

function WebReportMore({ data }) {
  const classes = useStyles();
  const topPageData = [];
  const performanceData = [];
  const productData = [];
  if (data != null) {
    data.topPages.forEach((element) => {
      const array = [];
      array.push(element.pagePath);
      array.push(element.session);
      array.push(element.user);
      array.push(element.view);
      topPageData.push(array);
    });
    data.performanceSources.forEach((element) => {
      const array = [];
      array.push(element.sourceMedium);
      array.push(element.session);
      array.push(element.user);
      array.push(element.newUser);
      performanceData.push(array);
    });
    data.products.forEach((element) => {
      const array = [];
      array.push(element.productName);
      array.push('branch1');
      array.push('ao');
      array.push(element.addToCart);
      productData.push(array);
    });
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={6}>
          <CustomTableBorder
            data={performanceData}
            name="Performance by Sources"
            columnNames={columnName1}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <CustomTableBorder
            data={topPageData}
            name="Search queries"
            columnNames={columnName2}
          />
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item sm={12} md={6} lg={6}>
          <CustomTableBorder
            data={searchQueriesData}
            name="Top pages"
            columnNames={columnName3}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <CustomTableBorder
            data={productData}
            name="Product"
            columnNames={columnName4}
          />
        </Grid>
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
        <CustomTable
          data={paymentData}
          name="Payment"
          columnNames={columnName5}
        />
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
        <CustomTable
          data={campaignsData}
          name="Campaigns"
          columnNames={columnName6}
        />
      </Grid>
    </div>
  );
}

WebReportMore.defaultProps = {
  data: null,
};

WebReportMore.propTypes = {
  data: PropTypes.shape({
    topPages: PropTypes.arrayOf(
      PropTypes.shape({
        pagePath: PropTypes.string.isRequired,
        session: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        view: PropTypes.string.isRequired,
      }),
    ),
    performanceSources: PropTypes.arrayOf(
      PropTypes.shape({
        newUser: PropTypes.string.isRequired,
        session: PropTypes.string.isRequired,
        sourceMedium: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
      }),
    ),
    products: PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string.isRequired,
        addToCart: PropTypes.number.isRequired,
      }),
    ),
  }),
};

export default WebReportMore;
