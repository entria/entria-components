import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { VIEWPORT } from '../Responsive';

const Wrapper = styled.div`
  padding: 20px;

  @media(min-width: ${VIEWPORT.MEDIUM}px) {
    padding: 40px;
  }
`;

const ContentBody = ({ style, children }) =>
  <Wrapper style={style}>
    {children}
  </Wrapper>;

ContentBody.defaultProps = {
  style: {},
};

ContentBody.propTypes = {
  style: PropTypes.object,
};

export default ContentBody;
