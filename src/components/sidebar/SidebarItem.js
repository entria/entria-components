import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ListItem } from 'material-ui/List';

const SidebarItem = ({ link, style, activeStyle, exact, children }) =>
  <NavLink
    to={link}
    style={{ ...styles.link, ...style }}
    activeStyle={{ ...styles.activeLink, ...activeStyle }}
    exact={exact}
  >
    <ListItem style={styles.listItem}>
      {children}
    </ListItem>
  </NavLink>;

const styles = {
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
};

SidebarItem.defaultProps = {
  style: {},
  activeStyle: {},
  exact: true,
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  exact: PropTypes.bool,
};

export default SidebarItem;
