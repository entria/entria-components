import React from 'react';
import { storiesOf } from '@kadira/storybook';
import loremIpsum from 'lorem-ipsum';

import FlatButton from 'material-ui/FlatButton';
import { Content } from '../../src';

const stories = storiesOf('Content', module);

const HeaderActions = (
  <Content.Header.Actions>
    <FlatButton label="Add" />
    <FlatButton label="Refresh" />
  </Content.Header.Actions>
);

stories.add('default', () =>
  <Content>
    {loremIpsum({ count: 3, units: 'paragraphs' })}
  </Content>,
);

stories.add('with body', () =>
  <Content>
    <Content.Body>
      {loremIpsum({ count: 3, units: 'paragraphs' })}
    </Content.Body>
  </Content>,
);

stories.add('with header', () =>
  <Content>
    <Content.Header title="Header" actions={HeaderActions} />
  </Content>,
);

stories.add('with body and header', () =>
  <Content>
    <Content.Header title="Header" actions={HeaderActions} />
    <Content.Body>
      {loremIpsum({ count: 3, units: 'paragraphs' })}
    </Content.Body>
  </Content>,
);
