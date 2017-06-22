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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardFooter = function CardFooter(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    _Card.CardActions,
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
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '15px 40px',
    marginBottom: -20,
    marginRight: -40,
    marginLeft: -40,
    marginTop: 20,
    borderTop: '1px solid #e5e5e5'
  }
};

CardFooter.defaultProps = {
  style: {}
};

CardFooter.propTypes = {
  style: _propTypes2.default.object
};

exports.default = CardFooter;