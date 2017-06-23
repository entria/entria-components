import React from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import FormActions from './FormActions';
import FormCancel from './FormCancel';
import FormCheckbox from './FormCheckbox';
import FormFieldSet from './FormFieldSet';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import createFromArray from './createFromArray';

const Form = ({ onSubmit, onValid, onInvalid, children }) =>
  <Formsy.Form onValid={onValid} onInvalid={onInvalid} onValidSubmit={onSubmit}>
    {children}
  </Formsy.Form>;

Form.Actions = FormActions;
Form.Cancel = FormCancel;
Form.Checkbox = FormCheckbox;
Form.FieldSet = FormFieldSet;
Form.Input = FormInput;
Form.Submit = FormSubmit;
Form.createFromArray = createFromArray;

Form.defaultProps = {
  onValid: () => null,
  onInvalid: () => null,
  onSubmit: () => null,
};

Form.propTypes = {
  onValid: PropTypes.func,
  onInvalid: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
