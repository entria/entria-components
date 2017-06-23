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

var FormCheckbox = function FormCheckbox(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value;
  return _react2.default.createElement(_lib.FormsyCheckbox, { name: name, label: label, value: value, style: styles.field });
};

var styles = {
  field: {
    marginTop: 13
  }
};

FormCheckbox.defaultProps = {
  label: '',
  value: false
};

FormCheckbox.propTypes = {
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  value: _propTypes2.default.bool
};

exports.default = FormCheckbox;