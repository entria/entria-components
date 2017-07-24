import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'material-ui/Tabs';

import { VIEWPORT } from '../Responsive';

const Wrapper = styled.div`
  > div {
    > div:nth-child(2) > div {
      transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;
    }

    @media(max-width: ${VIEWPORT.MEDIUM}px) {
      > div:nth-child(1) {
        flex-direction: column;

        button {
          width: 100% !important;
        }
      }

      > div:nth-child(2) > div {
        left: 0 !important;
        width: 100% !important;
        top: -${props => (props.tabsCount - props.selectedIndex - 1) * 48}px
      }
    }
  }
`;

const CustomTabs = props => {
  return (
    <Wrapper selectedIndex={props.initialSelectedIndex} tabsCount={props.children.length}>
      <Tabs {...props} />
    </Wrapper>
  );
};

export default CustomTabs;
