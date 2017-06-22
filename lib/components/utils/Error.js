'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    { style: styles.wrapper },
    _react2.default.createElement(
      'h1',
      null,
      'Error'
    ),
    _react2.default.createElement(
      'p',
      null,
      error.message
    )
  );
};

var styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

exports.default = Error;