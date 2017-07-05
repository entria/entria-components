import React from 'react';
import PropTypes from 'prop-types';

import { getTheme } from '../Theme';
import ContentHeaderActions from './ContentHeaderActions';

const ContentHeader = ({ title, actions }) =>
  <div style={styles.container}>
    <h1 style={styles.title}>
      {title}
    </h1>

    {actions && <div style={styles.actions}>{actions}</div>}
  </div>;

ContentHeader.Actions = ContentHeaderActions;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    boxSizing: 'border-box',
  },
  title: {
    width: '100%',
    margin: 0,
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: '-0.015em',
    color: getTheme().palette.primary1Color,
  },
  actions: {},
};

ContentHeader.defaultProps = {
  title: null,
  actions: null,
};

ContentHeader.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.node,
};

export default ContentHeader;
