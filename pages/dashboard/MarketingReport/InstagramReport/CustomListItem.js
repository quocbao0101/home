import React from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#1E293B',
    '&:hover': {
      backgroundColor: '#E2E8F0',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginLeft: '10px',
    fontSize: '14px',
    fontWeight: 400,
  },

  value: {
    marginLeft: '10px',
    fontSize: '14px',
    fontWeight: 400,
  },

});
function CustomListItem(props) {
  const classes = useStyles();
  const {
    icon, title, value, backgroundColor,
  } = props;
  return (
    <div className={classes.container} style={backgroundColor != null ? { backgroundColor } : {}}>
      <div className={classes.content}>
        <Avatar src={icon} variant="square" />
        <Typography className={classes.title}>{title}</Typography>
      </div>
      <div className={classes.title}>{value}</div>
    </div>
  );
}

CustomListItem.defaultProps = {
  icon: null,
  backgroundColor: null,
};

CustomListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
};
export default CustomListItem;
