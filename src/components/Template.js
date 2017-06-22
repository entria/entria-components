import React from 'react';
import { css } from 'glamor';

import Theme from './Theme';

css.global('html, body, #root, [data-reactroot]', {
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#F8F8F8',
  fontFamily: Theme.fontFamily,
});

const Template = ({ children }) => <div>{children}</div>;

export default Template;
