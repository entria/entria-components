import React from 'react';

const FormActions = ({ children }) =>
  <div style={styles.wrapper}>
    {children}
  </div>;

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
};

export default FormActions;
