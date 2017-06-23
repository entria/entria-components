import React from 'react';
import get from 'lodash/get';

import Form from './Form';

const defaultOptions = {
  onSubmit: () => null,
  initialValues: {},
};

function renderField(field, options) {
  const type = field.type || 'text';
  const value = get(options.initialValues, field.name);

  if (type === 'boolean') {
    const boolValue = !!value;

    return (
      <Form.Checkbox
        key={field.name}
        name={field.name}
        label={field.placeholder}
        value={boolValue}
        {...field}
      />
    );
  }

  return (
    <Form.Input
      key={field.name}
      name={field.name}
      type={type}
      placeholder={field.placeholder}
      value={value}
      required={field.required}
    />
  );
}

export default function createFromArray(fields = [], customOptions = {}) {
  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  class CreatedForm extends React.Component {
    state = {
      valid: false,
    };

    toggleValid = isValid => () => {
      this.setState({
        valid: isValid,
      });
    };

    render() {
      return (
        <Form
          onSubmit={options.onSubmit}
          onValid={this.toggleValid(true)}
          onInvalid={this.toggleValid(false)}
        >
          <Form.FieldSet>
            {fields.map(field => renderField(field, options))}
          </Form.FieldSet>

          <Form.Actions>
            <Form.Cancel />
            <Form.Submit disabled={!this.state.valid} />
          </Form.Actions>
        </Form>
      );
    }
  }

  return <CreatedForm />;
}
