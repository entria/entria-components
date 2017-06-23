'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lib = require('formsy-material-ui/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormInput = function FormInput(_ref) {
  var name = _ref.name,
      type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required;
  return _react2.default.createElement(_lib.FormsyText, {
    name: name,
    type: type,
    hintText: label,
    floatingLabelText: placeholder,
    value: value,
    validations: required ? 'isExisty' : null,
    validationError: 'Campo obrigat\xF3rio',
    style: styles.field
  });
};

var styles = {
  field: {
    width: '100%'
  }
};

FormInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  value: null,
  required: false
};

FormInput.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string,
  required: _propTypes2.default.bool
};

exports.default = FormInput;