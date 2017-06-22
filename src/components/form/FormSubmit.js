import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const FormSubmit = ({ label }) => <RaisedButton type="submit" primary={true} label={label} />;

FormSubmit.defaultProps = {
  label: 'Submit',
};

FormSubmit.propTypes = {
  label: PropTypes.string,
};

export default FormSubmit;
