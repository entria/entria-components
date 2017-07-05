import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ListItem } from 'material-ui/List';

const SidebarItem = ({ link, style, children }) =>
  <Link to={link} style={styles.link}>
    <ListItem style={{ ...styles.item, ...style }}>
      {children}
    </ListItem>
  </Link>;

const styles = {
  link: {
    textDecoration: 'none',
  },
  item: {
    textDecoration: 'none',
  },
};

SidebarItem.defaultProps = {
  style: {},
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default SidebarItem;
