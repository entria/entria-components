import React from 'react';

const ContentHeaderActions = ({ children }) =>
  <div style={styles().wrapper}>
    {children}
  </div>;

const styles = () => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default ContentHeaderActions;
