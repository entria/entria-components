import React from 'react';

import { getTheme } from '../Theme';

const SidebarHeader = ({ children }) =>
  <div style={styles.wrapper}>
    {children}
  </div>;

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: getTheme().palette.primary1Color,
    color: 'white',
    boxSizing: 'border-box',
  },
};

export default SidebarHeader;
