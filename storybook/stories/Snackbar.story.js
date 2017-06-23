import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@kadira/storybook';
import loremIpsum from 'lorem-ipsum';

import FlatButton from 'material-ui/FlatButton';
import { Content } from '../../src';

const stories = storiesOf('Snackbar', module);

const ComponentWithSnackbar = (props, context) => (
  <FlatButton
    label="Show message"
    onTouchTap={() => context.showSnackbar({ message: loremIpsum() })}
  />
);

ComponentWithSnackbar.contextTypes = {
  showSnackbar: PropTypes.func,
};

stories.add('default', () =>
  <Content.Body>
    <ComponentWithSnackbar />
  </Content.Body>
);
