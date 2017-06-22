'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormFieldSet = function FormFieldSet(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: styles.wrapper },
    children
  );
};

var styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 34
  }
};

exports.default = FormFieldSet;