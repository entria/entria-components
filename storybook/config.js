import React from 'react';
import { addDecorator, configure } from '@kadira/storybook';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { ThemeProvider } from '../src';
import store from './store';

const req = require.context('./stories', true, /\.story\.js$/);

addDecorator(story => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </MemoryRouter>
  </Provider>
));

function loadStories () {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
