import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ style, children }) =>
  <div style={{ ...styles.wrapper, ...style }}>
    {children}
  </div>;

const styles = {
  wrapper: {
    padding: '15px 40px',
    marginTop: -20,
    marginRight: -40,
    marginLeft: -40,
    marginBottom: 20,
    borderBottom: '1px solid #e5e5e5',
  },
};

CardHeader.defaultProps = {
  style: {},
};

CardHeader.propTypes = {
  style: PropTypes.object,
};

export default CardHeader;
