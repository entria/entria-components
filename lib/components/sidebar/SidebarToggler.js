'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Sidebar = require('../../ducks/Sidebar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarToggler = function SidebarToggler(_ref) {
  var actions = _ref.actions,
      children = _ref.children;
  return _react2.default.createElement(
    'span',
    { onTouchTap: function onTouchTap() {
        return actions.toggleSidebar();
      } },
    children
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleSidebar: function toggleSidebar() {
        return dispatch((0, _Sidebar.toggleSidebar)());
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SidebarToggler);