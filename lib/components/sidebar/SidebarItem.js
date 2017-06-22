'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarItem = function SidebarItem(_ref) {
  var link = _ref.link,
      children = _ref.children;
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: link },
    _react2.default.createElement(
      _List.ListItem,
      null,
      children
    )
  );
};

SidebarItem.propTypes = {
  link: _propTypes2.default.string.isRequired
};

exports.default = SidebarItem;