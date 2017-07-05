import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

import { getTheme } from '../Theme';
import HeaderBrand from './HeaderBrand';

const Header = ({ left, title, right, style }) =>
  <div>
    <AppBar
      iconElementLeft={left}
      iconStyleLeft={styles.left}
      title={title}
      titleStyle={styles.title}
      iconElementRight={right}
      iconStyleRight={styles.right}
      showMenuIconButton={left !== null}
      style={{ ...styles.wrapper, ...style }}
      zDepth={2}
    />
  </div>;

Header.Brand = HeaderBrand;

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    zIndex: 1400,
    boxShadow: 'rgba(0, 0, 0, 0.004) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 8px 20px',
  },
  left: {
    width: getTheme().drawer.width,
    height: getTheme().appBar.height,
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    height: getTheme().appBar.height,
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 'initial',
  },
  right: {
    width: getTheme().drawer.width,
    height: getTheme().appBar.height,
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};

Header.defaultProps = {
  style: {},
  left: null,
  title: null,
  right: null,
};

Header.propTypes = {
  style: PropTypes.object,
  left: PropTypes.node,
  title: PropTypes.node,
  right: PropTypes.node,
};

export default Header;
