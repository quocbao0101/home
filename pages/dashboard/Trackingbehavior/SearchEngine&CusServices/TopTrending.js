import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
  },
  header: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
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
}));

function TopTrending({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <Typography className={classes.title}> Top trending </Typography>
      </div>
      <div className={classes.content}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
        >
          {data.map((menuitem) => (
            <Box key={menuitem.Id}>
              {menuitem.Product}
              (
              {menuitem.quantily}
              )
            </Box>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default TopTrending;

TopTrending.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number,
      Product: PropTypes.string,
      quantity: PropTypes.string,
    }),
  ).isRequired,
};

const Box = styled.div`
    border-radius: 100px;
    padding: 10px;
    background-Color: rgba(226, 232, 240, 0.4);
    margin: 10px 5px 5px 5px;
    text-align: flex-start;
    font-size: 14px;
    font-style: bold;
    color: #000000;
`;
