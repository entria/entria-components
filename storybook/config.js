import React from 'react';
import { addDecorator, configure } from '@kadira/storybook';
import { MemoryRouter } from 'react-router';

import { ThemeProvider } from '../src';

const req = require.context('./stories', true, /\.story\.js$/);

addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>
    <ThemeProvider>
      {story()}
    </ThemeProvider>
  </MemoryRouter>
));

function loadStories () {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
