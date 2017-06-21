import React from 'react';
import { storiesOf } from '@kadira/storybook';
import loremIpsum from 'lorem-ipsum';

import FlatButton from 'material-ui/FlatButton';
import { Card } from '../../src';

const stories = storiesOf('Card', module);

stories.add('default', () => (
  <Card>
    {loremIpsum({ count: 3, units: 'paragraphs' })}
  </Card>
));

stories.add('with header', () => (
  <Card>
    <Card.Header>{loremIpsum()}</Card.Header>
    {loremIpsum({ count: 3, units: 'paragraphs' })}
  </Card>
));

stories.add('with footer', () => (
  <Card>
    {loremIpsum({ count: 3, units: 'paragraphs' })}
    <Card.Footer>
      <FlatButton label="Ok" />
    </Card.Footer>
  </Card>
));

stories.add('with header and footer', () => (
  <Card>
    <Card.Header>{loremIpsum()}</Card.Header>
    {loremIpsum({ count: 3, units: 'paragraphs' })}
    <Card.Footer>
      <FlatButton label="Ok" />
    </Card.Footer>
  </Card>
));
