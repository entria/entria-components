import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTheme } from '../Theme';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

const Content = ({ sidebar, style, children }) => {
  const stylesWrapper = {
    ...styles.wrapper,
    ...style,
  };
  if (!sidebar.visible) {
    stylesWrapper.paddingLeft = 0;
  }

  return (
    <div style={stylesWrapper}>
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

Content.Body = ContentBody;
Content.Header = ContentHeader;

const styles = {
  wrapper: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    paddingTop: getTheme().appBar.height,
    paddingLeft: getTheme().drawer.width,
    transitionProperty: 'padding',
    transitionDuration: '300ms',
  },
  content: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100%',
    flexGrow: 1,
  },
};

Content.defaultProps = {
  style: {},
};

Content.propTypes = {
  style: PropTypes.object,
};

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

export default connect(mapStateToProps)(Content);
