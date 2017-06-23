import React from 'react';
import PropTypes from 'prop-types';
import { FormsyCheckbox } from 'formsy-material-ui/lib';

const FormCheckbox = ({ name, label, value }) =>
  <FormsyCheckbox name={name} label={label} value={value} style={styles.field} />;

const styles = {
  field: {
    marginTop: 13,
  },
};

FormCheckbox.defaultProps = {
  label: '',
  value: false,
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.bool,
};

export default FormCheckbox;
