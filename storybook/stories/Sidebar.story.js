import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FlatButton from 'material-ui/FlatButton';
import { Sidebar, Content } from '../../src';

const stories = storiesOf('Sidebar', module);

stories.add('default', () =>
  <Sidebar style={styles.sidebar}>
    <Sidebar.Menu>
      <Sidebar.Item link="#">Link 1</Sidebar.Item>
      <Sidebar.Item link="#">Link 2</Sidebar.Item>
      <Sidebar.Item link="#">Link 3</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('with header', () =>
  <Sidebar style={styles.sidebar}>
    <Sidebar.Header>Header</Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.Item link="#">Link 1</Sidebar.Item>
      <Sidebar.Item link="#">Link 2</Sidebar.Item>
      <Sidebar.Item link="#">Link 3</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('with many menus', () =>
  <Sidebar style={styles.sidebar}>
    <Sidebar.Header>Header</Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.Item link="#">Link 1</Sidebar.Item>
      <Sidebar.Item link="#">Link 2</Sidebar.Item>
      <Sidebar.Item link="#">Link 3</Sidebar.Item>
    </Sidebar.Menu>
    <Sidebar.Menu>
      <Sidebar.Item link="#">Link 4</Sidebar.Item>
      <Sidebar.Item link="#">Link 5</Sidebar.Item>
      <Sidebar.Item link="#">Link 6</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('with toggler', () =>
  <Content style={styles.content}>
    <Sidebar style={styles.sidebar}>
      <Sidebar.Header>Header</Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.Item link="#">Link 1</Sidebar.Item>
        <Sidebar.Item link="#">Link 2</Sidebar.Item>
        <Sidebar.Item link="#">Link 3</Sidebar.Item>
      </Sidebar.Menu>
      <Sidebar.Menu>
        <Sidebar.Item link="#">Link 4</Sidebar.Item>
        <Sidebar.Item link="#">Link 5</Sidebar.Item>
        <Sidebar.Item link="#">Link 6</Sidebar.Item>
      </Sidebar.Menu>
    </Sidebar>

    <Content.Body>
      <Sidebar.Toggler>
        <FlatButton label="Toggle" />
      </Sidebar.Toggler>
    </Content.Body>
  </Content>,
);

const styles = {
  content: {
    paddingTop: 0,
  },
  sidebar: {
    top: 0,
  },
};
