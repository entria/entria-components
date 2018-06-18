import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ image, title, subtitle, style, to }) => (
  <Link style={{ ...styles().link, ...style }} to={to != null ? to : '/'}>
    {image ? (
      <BrandWithImage image={image} title={title} />
    ) : (
      <BrandWithoutImage title={title} subtitle={subtitle} />
    )}
  </Link>
);

const BrandWithImage = ({ image, title }) => (
  <div style={styles().withImage}>
    <img src={image} title={title} alt={title} style={styles().image} />
  </div>
);

const BrandWithoutImage = ({ title, subtitle }) => (
  <div style={styles().withoutImage}>
    <h3 style={styles().title}>{title}</h3>

    <small style={styles().subtitle}>{subtitle}</small>
  </div>
);

const styles = () => ({
  link: {
    height: '100%',
    textDecoration: 'none',
    color: '#232323',
  },
  withImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  withoutImage: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    margin: 0,
    padding: 0,
    fontSize: 23,
  },
  subtitle: {
    margin: 0,
    padding: 0,
    fontSize: 12.5,
    textTransform: 'uppercase',
  },
});

Brand.defaultProps = {
  style: {},
};

Brand.propTypes = {
  style: PropTypes.object,
};

export default Brand;
