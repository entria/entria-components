'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardHeader = function CardHeader(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: _extends({}, styles.wrapper, style) },
    children
  );
};

var styles = {
  wrapper: {
    padding: '15px 40px',
    marginTop: -20,
    marginRight: -40,
    marginLeft: -40,
    marginBottom: 20,
    borderBottom: '1px solid #e5e5e5'
  }
};

CardHeader.defaultProps = {
  style: {}
};

CardHeader.propTypes = {
  style: _propTypes2.default.object
};

exports.default = CardHeader;