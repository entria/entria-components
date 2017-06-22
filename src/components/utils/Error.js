import React from 'react';

const Error = ({ error }) =>
  <div style={styles.wrapper}>
    <h1>Error</h1>
    <p>{error.message}</p>
  </div>;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Error;
