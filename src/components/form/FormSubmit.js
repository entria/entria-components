import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const FormSubmit = ({ disabled, label }) =>
  <RaisedButton
    type="submit"
    primary={true}
    disabled={disabled}
    label={label}
    style={styles.button}
  />;

const styles = {
  button: {
    marginLeft: 20,
  },
};

FormSubmit.defaultProps = {
  disabled: false,
  label: 'Submit',
};

FormSubmit.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export default FormSubmit;
