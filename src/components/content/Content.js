import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getTheme } from '../Theme';
import { VIEWPORT } from '../Responsive';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-top: ${() => `${getTheme().appBar.height}px`};
  padding-left: 0px;
  transition-property: padding;
  transition-duration: 300ms;

  @media(min-width: ${VIEWPORT.MEDIUM}px) {
    padding-left: ${props => (props.sidebar.visible ? `${getTheme().drawer.width}px` : 0)};
  }
`;

const Content = ({ sidebar, style, children }) =>
  <Wrapper sidebar={sidebar} style={style}>
    <div style={styles.content}>
      {children}
    </div>
  </Wrapper>;

Content.Body = ContentBody;
Content.Header = ContentHeader;

const styles = {
  content: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100%',
    flexGrow: 1,
  },
};

Content.defaultProps = {
  style: {},
};

Content.propTypes = {
  style: PropTypes.object,
};

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

export default connect(mapStateToProps)(Content);
