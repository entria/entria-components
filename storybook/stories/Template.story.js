import React from 'react';
import { storiesOf } from '@kadira/storybook';
import loremIpsum from 'lorem-ipsum';

import FlatButton from 'material-ui/FlatButton';
import { Header, Sidebar, Content } from '../../src';

const stories = storiesOf('Template', module);

stories.add('default', () =>
  <div>
    <Header left={<Header.Brand title="Entria" subtitle="Tech" />} />

    <Sidebar>
      <Sidebar.Menu>
        <Sidebar.Item link="#">Link 1</Sidebar.Item>
        <Sidebar.Item link="#">Link 2</Sidebar.Item>
        <Sidebar.Item link="#">Link 3</Sidebar.Item>
      </Sidebar.Menu>
    </Sidebar>

    <Content>
      <Content.Header
        title="Header"
        actions={
          <Content.Header.Actions>
            <FlatButton label="Add" />
            <FlatButton label="Refresh" />
          </Content.Header.Actions>
        }
      />

      <Content.Body>
        {loremIpsum({ count: 3, units: 'paragraphs' })}
      </Content.Body>
    </Content>
  </div>,
);
