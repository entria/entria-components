import React from 'react';
import { addDecorator, configure } from '@kadira/storybook';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ThemeProvider, customize } from '../src';
import store from './store';

injectTapEventPlugin();

customize({
  palette: {
    primary1Color: '#661f42',
  },
});

const req = require.context('./stories', true, /\.story\.js$/);

addDecorator(story =>
  <div style={{ margin: -8 }}>
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          {story()}
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  </div>,
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
