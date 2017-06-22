import React from 'react';

const ContentHeaderActions = ({ children }) =>
  <div style={styles.wrapper}>
    {children}
  </div>;

export const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default ContentHeaderActions;
