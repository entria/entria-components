import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Theme from './Theme';

const ThemeProvider = ({ children }) =>
  <MuiThemeProvider muiTheme={Theme}>
    {children}
  </MuiThemeProvider>;

export default ThemeProvider;
