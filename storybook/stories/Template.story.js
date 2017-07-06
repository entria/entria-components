import React from 'react';
import { connect } from 'react-redux';
import { storiesOf } from '@kadira/storybook';
import loremIpsum from 'lorem-ipsum';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import { Header, Sidebar, Content, AnimatedIcons } from '../../src';

const stories = storiesOf('Template', module);

const CustomHeader = connect(
  state => ({
    sidebar: state.sidebar,
  }),
)(
  ({ sidebar }) => (
    <Header
      left={
        <IconButton>
          <Sidebar.Toggler>
            <AnimatedIcons.Menu opened={sidebar.visible} />
          </Sidebar.Toggler>
        </IconButton>
      }
      title={
        <Header.Brand title="Entria" subtitle="Tech" />
      }
    />
  ),
);

stories.add('default', () =>
  <div>
    <CustomHeader />

    <Sidebar>
      <Sidebar.Header>Entria</Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.Item link="#" style={styles.sidebarItem}>Link 1</Sidebar.Item>
        <Sidebar.Item link="#" style={styles.sidebarItem}>Link 2</Sidebar.Item>
        <Sidebar.Item link="#" style={styles.sidebarItem}>Link 3</Sidebar.Item>
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

const styles = {
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  sidebarItem: {
    color: '#545454',
  },
};
