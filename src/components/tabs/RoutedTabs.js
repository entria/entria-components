import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Tabs from './Tabs';
import Tab from './Tab';

const RoutedTabs = ({ tabs, location, history }) => {
  let initialSelectedIndex = 0;
  tabs.forEach((tab, tabIndex) => {
    if (tab.route === location.pathname) {
      initialSelectedIndex = tabIndex;
    }
  });

  return (
    <Tabs initialSelectedIndex={initialSelectedIndex}>
      {tabs.map((tab, tabIndex) =>
        <Tab key={tab.label} label={tab.label} onActive={() => history.replace(tab.route)}>
          {tabIndex === initialSelectedIndex ? tab.component : null}
        </Tab>,
      )}
    </Tabs>
  );
};

RoutedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
      component: PropTypes.node,
    }),
  ).isRequired,
};

export default withRouter(RoutedTabs);
