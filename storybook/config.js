import React from 'react';
import { addDecorator, configure } from '@kadira/storybook';

import { ThemeProvider } from '../src';

const req = require.context('./stories', true, /\.story\.js$/);

addDecorator(story => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
));

function loadStories () {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
