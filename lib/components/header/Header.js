'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Theme = require('../Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _HeaderBrand = require('./HeaderBrand');

var _HeaderBrand2 = _interopRequireDefault(_HeaderBrand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var left = _ref.left,
      title = _ref.title,
      right = _ref.right,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AppBar2.default, {
      iconElementLeft: left,
      iconStyleLeft: styles.left,
      title: title,
      titleStyle: styles.title,
      iconElementRight: right,
      iconStyleRight: styles.right,
      showMenuIconButton: left !== null,
      style: _extends({}, styles.wrapper, style),
      zDepth: 2
    })
  );
};

Header.Brand = _HeaderBrand2.default;

var styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    zIndex: 1400,
    boxShadow: 'rgba(0, 0, 0, 0.004) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 8px 20px'
  },
  left: {
    width: _Theme2.default.drawer.width,
    height: _Theme2.default.appBar.height,
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex'
  },
  title: {
    height: _Theme2.default.appBar.height,
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 'initial'
  },
  right: {
    width: _Theme2.default.drawer.width,
    height: _Theme2.default.appBar.height,
    margin: 0,
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

Header.defaultProps = {
  style: {},
  left: null,
  title: null,
  right: null
};

Header.propTypes = {
  style: _propTypes2.default.object,
  left: _propTypes2.default.node,
  title: _propTypes2.default.node,
  right: _propTypes2.default.node
};

exports.default = Header;