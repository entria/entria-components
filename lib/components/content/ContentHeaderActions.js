'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentHeaderActions = function ContentHeaderActions(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: styles.wrapper },
    children
  );
};

var styles = exports.styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  }
};

exports.default = ContentHeaderActions;