import React from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';

const ContentHeader = ({ title }) =>
  <div style={styles.container}>
    <h1 style={styles.title}>
      {title}
    </h1>
  </div>;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    height: 100,
    boxSizing: 'border-box',
  },
  title: {
    width: '100%',
    margin: 0,
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: '-0.015em',
    color: Theme.palette.primary1Color,
  },
};

ContentHeader.defaultProps = {
  title: null,
};

ContentHeader.propTypes = {
  title: PropTypes.string,
};

export default ContentHeader;
