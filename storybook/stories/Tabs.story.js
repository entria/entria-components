import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Tabs, Tab, RoutedTabs } from '../../src';

const stories = storiesOf('Tabs', module);

stories.add('default', () =>
  <div style={styles.wrapper}>
    <Tabs>
      <Tab label="Tab 1">
        <div style={styles.tabComponent}>Component 1</div>
      </Tab>
      <Tab label="Tab 2">
        <div style={styles.tabComponent}>Component 2</div>
      </Tab>
      <Tab label="Tab 3">
        <div style={styles.tabComponent}>Component 3</div>
      </Tab>
    </Tabs>
  </div>
);

stories.add('RoutedTabs', () =>
  <div style={styles.wrapper}>
    <p style={styles.message}>I change the route when you click me!</p>

    <RoutedTabs
      tabs={[
        {
          route: '/route-1',
          label: 'Tab 1',
          component: <div style={styles.tabComponent}>Component 1</div>,
        },
        {
          route: '/route-2',
          label: 'Tab 2',
          component: <div style={styles.tabComponent}>Component 2</div>,
        },
        {
          route: '/route-3',
          label: 'Tab 3',
          component: <div style={styles.tabComponent}>Component 3</div>,
        },
      ]}
    />
  </div>
);

const styles = {
  wrapper: {
    padding: 20,
  },
  message: {
    marginBottom: 30,
  },
  tabComponent: {
    padding: 20,
  },
};
