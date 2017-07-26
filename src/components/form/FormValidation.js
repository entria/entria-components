import React from 'react'

export const validate = (values, validations) => {
  const errors = {};
  const fieldKeys = Object.keys(values);

  fieldKeys.map(field => {
    const value = values[field];
    const rules = validations[field];

    const error = rules.map(rule => {
      return rule(value)
    })

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}

export const required = (message = 'Campo obrigatório') => {
  return (value) => {
    const isEmpty = value === '' || value === undefined || value === null;
    return isEmpty ? message : null;
  }
}
