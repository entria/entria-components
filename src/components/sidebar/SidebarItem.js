import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ListItem } from 'material-ui/List';

import { connect } from 'react-redux';
import { toggleSidebar } from '../../ducks/Sidebar';

import { isLarge } from '../Responsive';

const SidebarItem = ({ link, style, activeStyle, exact, external, sidebar, actions, children }) => {
  if (external) {
    return (
      <a href={link} style={{ ...styles().link, ...style }} target="_blank">
        <ListItem style={styles().listItem}>
          {children}
        </ListItem>
      </a>
    );
  }

  return (
    <NavLink
      to={link}
      style={{ ...styles().link, ...style }}
      activeStyle={{ ...styles().activeLink, ...activeStyle }}
      exact={exact}
      onClick={() => {
        if (!isLarge() && sidebar.visible) {
          actions.toggleSidebar();
        }
      }}
    >
      <ListItem style={styles().listItem}>
        {children}
      </ListItem>
    </NavLink>
  );
};

const styles = () => ({
  link: {
    transition: 'all 100ms linear',
    textDecoration: 'none',
  },
  activeLink: {
    display: 'block',
  },
  listItem: {
    color: 'inherit',
  },
});

SidebarItem.defaultProps = {
  style: {},
  activeStyle: {},
  exact: true,
  external: false,
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  exact: PropTypes.bool,
  external: PropTypes.bool,
};

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleSidebar: () => dispatch(toggleSidebar()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarItem);
