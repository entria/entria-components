'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _FormActions = require('./FormActions');

var _FormActions2 = _interopRequireDefault(_FormActions);

var _FormCancel = require('./FormCancel');

var _FormCancel2 = _interopRequireDefault(_FormCancel);

var _FormCheckbox = require('./FormCheckbox');

var _FormCheckbox2 = _interopRequireDefault(_FormCheckbox);

var _FormFieldSet = require('./FormFieldSet');

var _FormFieldSet2 = _interopRequireDefault(_FormFieldSet);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormSubmit = require('./FormSubmit');

var _FormSubmit2 = _interopRequireDefault(_FormSubmit);

var _createFromArray = require('./createFromArray');

var _createFromArray2 = _interopRequireDefault(_createFromArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      onValid = _ref.onValid,
      onInvalid = _ref.onInvalid,
      children = _ref.children;
  return _react2.default.createElement(
    _formsyReact2.default.Form,
    { onValid: onValid, onInvalid: onInvalid, onValidSubmit: onSubmit },
    children
  );
};

Form.Actions = _FormActions2.default;
Form.Cancel = _FormCancel2.default;
Form.Checkbox = _FormCheckbox2.default;
Form.FieldSet = _FormFieldSet2.default;
Form.Input = _FormInput2.default;
Form.Submit = _FormSubmit2.default;
Form.createFromArray = _createFromArray2.default;

Form.defaultProps = {
  onValid: function onValid() {
    return null;
  },
  onInvalid: function onInvalid() {
    return null;
  },
  onSubmit: function onSubmit() {
    return null;
  }
};

Form.propTypes = {
  onValid: _propTypes2.default.func,
  onInvalid: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func
};

exports.default = Form;