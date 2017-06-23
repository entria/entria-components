import React from 'react';
import PropTypes from 'prop-types';
import { FormsyText } from 'formsy-material-ui/lib';

const FormInput = ({ name, type, label, placeholder, value, required }) =>
  <FormsyText
    name={name}
    type={type}
    hintText={label}
    floatingLabelText={placeholder}
    value={value}
    validations={required ? 'isExisty' : null}
    validationError="Campo obrigatório"
    style={styles.field}
  />;

const styles = {
  field: {
    width: '100%',
  },
};

FormInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  value: null,
  required: false,
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
};

export default FormInput;
