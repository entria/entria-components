import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Error, Icon, InfiniteScroll, Loading, RoutedTabs } from '../../src';

const stories = storiesOf('Utils', module);

stories.add('Error', () => <Error error={{ message: 'This is a fake error.' }} />);

stories.add('Icon', () =>
  <div style={styles.iconsWrapper}>
    <Icon children="home" />
    <Icon children="flight_takeoff" />
    <Icon children="cloud_download" />
    <Icon children="videogame_asset" />
  </div>
);

stories.add('InfiniteScroll', () =>
  <div style={{ minHeight: window.outerHeight }}>
    <InfiniteScroll onScroll={() => alert('end reached')}>
      <div>
        Scroll me
      </div>
    </InfiniteScroll>
  </div>
);

stories.add('Loading', () => <Loading />);

stories.add('RoutedTabs', () =>
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
);

const styles = {
  iconsWrapper: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabComponent: {
    padding: 20,
  },
};
