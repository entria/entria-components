import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ListItem } from 'material-ui/List';

const SidebarItem = ({ link, children }) => (
  <Link to={link}>
    <ListItem>
      {children}
    </ListItem>
  </Link>
);

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
};

export default SidebarItem;
