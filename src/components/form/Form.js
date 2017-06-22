import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import FormActions from './FormActions';
import FormFieldSet from './FormFieldSet';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';

class Form extends Component {
  state = {
    valid: false,
  };

  toggleValid = valid => () => {
    this.setState({
      valid,
    });
  };

  render() {
    const { children, onSubmit } = this.props;
    return (
      <Formsy.Form
        onValid={this.toggleValid(true)}
        onInvalid={this.toggleValid(false)}
        onValidSubmit={onSubmit}
      >
        {children}
      </Formsy.Form>
    );
  }
}

Form.Actions = FormActions;
Form.FieldSet = FormFieldSet;
Form.Input = FormInput;
Form.Submit = FormSubmit;

Form.defaultProps = {
  onSubmit: null,
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
