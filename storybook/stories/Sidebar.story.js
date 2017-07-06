import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FlatButton from 'material-ui/FlatButton';
import { Sidebar, Content, getTheme } from '../../src';

const stories = storiesOf('Sidebar', module);

stories.add('default', () =>
  <Sidebar style={styles.sidebar}>
    <Sidebar.Menu>
      <Sidebar.Item link="#" style={styles.item}>Link 1</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 2</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 3</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('styled', () =>
  <Sidebar style={{ ...styles.sidebar, ...styles.styledSidebar }}>
    <Sidebar.Menu>
      <Sidebar.Item link="#" style={styles.styledSidebarItem}>Link 1</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.styledSidebarItem}>Link 2</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.styledSidebarItem}>Link 3</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('with header', () =>
  <Sidebar style={styles.sidebar}>
    <Sidebar.Header>Header</Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.Item link="#" style={styles.item}>Link 1</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 2</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 3</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('with many menus', () =>
  <Sidebar style={styles.sidebar}>
    <Sidebar.Header>Header</Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.Item link="#" style={styles.item}>Link 1</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 2</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 3</Sidebar.Item>
    </Sidebar.Menu>
    <Sidebar.Menu>
      <Sidebar.Item link="#" style={styles.item}>Link 4</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 5</Sidebar.Item>
      <Sidebar.Item link="#" style={styles.item}>Link 6</Sidebar.Item>
    </Sidebar.Menu>
  </Sidebar>,
);

stories.add('with toggler', () =>
  <Content style={styles.content}>
    <Sidebar style={styles.sidebar}>
      <Sidebar.Header>Header</Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.Item link="#" style={styles.item}>Link 1</Sidebar.Item>
        <Sidebar.Item link="#" style={styles.item}>Link 2</Sidebar.Item>
        <Sidebar.Item link="#" style={styles.item}>Link 3</Sidebar.Item>
      </Sidebar.Menu>
      <Sidebar.Menu>
        <Sidebar.Item link="#" style={styles.item}>Link 4</Sidebar.Item>
        <Sidebar.Item link="#" style={styles.item}>Link 5</Sidebar.Item>
        <Sidebar.Item link="#" style={styles.item}>Link 6</Sidebar.Item>
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
  item: {
    color: '#545454',
  },
  styledSidebar: {
    boxShadow: 0,
    background: getTheme().palette.primary1Color,
  },
  styledSidebarItem: {
    color: '#FFF',
  },
};
