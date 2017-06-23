'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormSubmit = function FormSubmit(_ref) {
  var disabled = _ref.disabled,
      label = _ref.label;
  return _react2.default.createElement(_RaisedButton2.default, {
    type: 'submit',
    primary: true,
    disabled: disabled,
    label: label,
    style: styles.button
  });
};

var styles = {
  button: {
    marginLeft: 20
  }
};

FormSubmit.defaultProps = {
  disabled: false,
  label: 'Submit'
};

FormSubmit.propTypes = {
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string
};

exports.default = FormSubmit;