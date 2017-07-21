import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';

import { connect } from 'react-redux';

import { getTheme } from '../Theme';
import { VIEWPORT, isLarge } from '../Responsive';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import SidebarMenu from './SidebarMenu';
import SidebarToggler from './SidebarToggler';

const Overlay = styled.div`
  transition: all 200ms;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, .1);
  opacity: 0;
  z-index: -1;

  @media(max-width: ${VIEWPORT.MEDIUM}px) {
    opacity: ${props => (!isLarge() && props.visible ? 1 : 0)};
    z-index: ${props => (!isLarge() && props.visible ? 1200 : -1)};
  }
`;

const Sidebar = ({ visible, style, children }) => {
  const containerStyle = {
    ...styles.container,
    ...style,
  };

  const top = /^\d+$/.test(containerStyle.top) ? `${containerStyle.top}px` : containerStyle.top;
  containerStyle.height = `calc(100% - ${top})`;

  return (
    <div>
      <Drawer docked={visible} containerStyle={containerStyle}>
        {children}
      </Drawer>

      <Overlay visible={visible} />
    </div>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Item = SidebarItem;
Sidebar.Menu = SidebarMenu;
Sidebar.Toggler = SidebarToggler;

const styles = {
  container: {
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
