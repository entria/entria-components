import React from 'react';
import { storiesOf } from '@kadira/storybook';
import loremIpsum from 'lorem-ipsum';

import { Content } from '../../src';

const stories = storiesOf('Content', module);

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
    <Content.Header title="Header" />
  </Content>,
);

stories.add('with body and header', () =>
  <Content>
    <Content.Header title="Header" />
    <Content.Body>
      {loremIpsum({ count: 3, units: 'paragraphs' })}
    </Content.Body>
  </Content>,
);
