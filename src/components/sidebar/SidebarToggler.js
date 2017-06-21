import React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../ducks/Sidebar';

const SidebarToggler = ({ actions, children }) => (
  <span onTouchTap={() => actions.toggleSidebar()}>
    {children}
  </span>
);

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleSidebar: () => dispatch(toggleSidebar()),
  },
});

export default connect(null, mapDispatchToProps)(SidebarToggler);
