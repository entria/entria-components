import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui';

const Loading = ({ visible, background, zIndex, size, thickness }) => {
  const styles = {
    wrapper: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: visible ? zIndex : -1,
      opacity: visible ? 1 : 0,
      transition: 'all 0.2s',
      background,
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.wrapper}>
      <CircularProgress size={size} thickness={thickness} />
    </div>
  );
};

Loading.defaultProps = {
  visible: true,
  background: '#FFFFFF',
  zIndex: 9999,
};

Loading.propTypes = {
  visible: PropTypes.bool,
  background: PropTypes.string,
  zIndex: PropTypes.number,
};

export default Loading;
