import React from 'react';
import { addDecorator, configure } from '@kadira/storybook';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ThemeProvider, createTheme } from '../src';
import store from './store';

injectTapEventPlugin();

const theme = createTheme({
  palette: {
    primary1Color: '#8b2756',
    accent1Color: '#661f42',
    accent2Color: '#3d192f',
  },
});

addDecorator(story =>
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
    </MemoryRouter>
  </Provider>,
);

const req = require.context('./stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
