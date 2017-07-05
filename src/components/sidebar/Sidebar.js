import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';

import { getTheme } from '../Theme';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import SidebarMenu from './SidebarMenu';
import SidebarToggler from './SidebarToggler';

const Sidebar = ({ visible, style, children }) => {
  const containerStyle = {
    ...styles.wrapper,
    ...style,
  };

  const top = /^\d+$/.test(containerStyle.top) ? `${containerStyle.top}px` : containerStyle.top;
  containerStyle.height = `calc(100% - ${top})`;

  return (
    <Drawer docked={visible} containerStyle={containerStyle}>
      {children}
    </Drawer>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Item = SidebarItem;
Sidebar.Menu = SidebarMenu;
Sidebar.Toggler = SidebarToggler;

const styles = {
  wrapper: {
    top: getTheme().appBar.height,
  },
};

Sidebar.defaultProps = {
  style: {},
};

Sidebar.propTypes = {
  style: PropTypes.object,
};

const mapStateToProps = state => ({
  visible: state.sidebar.visible,
});

export default connect(mapStateToProps)(Sidebar);
