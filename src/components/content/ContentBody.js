import React from 'react';
import PropTypes from 'prop-types';

const TemplateContent = ({ style, children }) =>
  <div style={{ ...styles.wrapper, ...style }}>
    {children}
  </div>;

const styles = {
  wrapper: {
    padding: 40,
  },
};

TemplateContent.defaultProps = {
  style: {},
};

TemplateContent.propTypes = {
  style: PropTypes.object,
};

export default TemplateContent;
