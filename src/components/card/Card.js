import React from 'react';
import PropTypes from 'prop-types';
import { Card as MUICard } from 'material-ui/Card';

import Footer from './Footer';
import Header from './Header';

const Card = ({ style, children }) => (
  <MUICard style={{ ...styles.wrapper, ...style }}>
    {React.isValidElement(children) ? children : <div>{children}</div>}
  </MUICard>
);

const styles = {
  wrapper: {
    position: 'relative',
    padding: '20px 40px',
    width: '100%',
    height: '100%',
  },
};

Card.Footer = Footer;
Card.Header = Header;

Card.defaultProps = {
  style: {},
};

Card.propTypes = {
  style: PropTypes.object,
};

export default Card;
