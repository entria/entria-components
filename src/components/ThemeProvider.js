import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Theme from './Theme';

injectTapEventPlugin();

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider muiTheme={Theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
