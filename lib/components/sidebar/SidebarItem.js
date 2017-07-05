'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarItem = function SidebarItem(_ref) {
  var link = _ref.link,
      style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: link, style: styles.link },
    _react2.default.createElement(
      _List.ListItem,
      { style: _extends({}, styles.item, style) },
      children
    )
  );
};

var styles = {
  link: {
    textDecoration: 'none'
  },
  item: {
    textDecoration: 'none'
  }
};

SidebarItem.defaultProps = {
  style: {}
};

SidebarItem.propTypes = {
  link: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
};

exports.default = SidebarItem;