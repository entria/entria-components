import React from 'react';

const FormFieldSet = ({ children }) =>
  <div style={styles.wrapper}>
    {children}
  </div>;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 34,
  },
};

export default FormFieldSet;
