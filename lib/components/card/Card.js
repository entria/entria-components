'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    _Card.Card,
    { style: _extends({}, styles.wrapper, style) },
    _react2.default.isValidElement(children) ? children : _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

var styles = {
  wrapper: {
    position: 'relative',
    padding: '20px 40px',
    width: '100%',
    height: '100%'
  }
};

Card.Footer = _CardFooter2.default;
Card.Header = _CardHeader2.default;

Card.defaultProps = {
  style: {}
};

Card.propTypes = {
  style: _propTypes2.default.object
};

exports.default = Card;