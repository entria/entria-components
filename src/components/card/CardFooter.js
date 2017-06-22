import React from 'react';
import PropTypes from 'prop-types';
import { CardActions } from 'material-ui/Card';

const CardFooter = ({ style, children }) =>
  <CardActions style={{ ...styles.wrapper, ...style }}>
    {React.isValidElement(children) ? children : <div>{children}</div>}
  </CardActions>;

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '15px 40px',
    marginBottom: -20,
    marginRight: -40,
    marginLeft: -40,
    marginTop: 20,
    borderTop: '1px solid #e5e5e5',
  },
};

CardFooter.defaultProps = {
  style: {},
};

CardFooter.propTypes = {
  style: PropTypes.object,
};

export default CardFooter;
