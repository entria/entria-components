'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Theme = require('../Theme');

var _SidebarHeader = require('./SidebarHeader');

var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

var _SidebarItem = require('./SidebarItem');

var _SidebarItem2 = _interopRequireDefault(_SidebarItem);

var _SidebarMenu = require('./SidebarMenu');

var _SidebarMenu2 = _interopRequireDefault(_SidebarMenu);

var _SidebarToggler = require('./SidebarToggler');

var _SidebarToggler2 = _interopRequireDefault(_SidebarToggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var visible = _ref.visible,
      style = _ref.style,
      children = _ref.children;

  var containerStyle = _extends({}, styles.wrapper, style);

  var top = /^\d+$/.test(containerStyle.top) ? containerStyle.top + 'px' : containerStyle.top;
  containerStyle.height = 'calc(100% - ' + top + ')';

  return _react2.default.createElement(
    _Drawer2.default,
    { docked: visible, containerStyle: containerStyle },
    children
  );
};

Sidebar.Header = _SidebarHeader2.default;
Sidebar.Item = _SidebarItem2.default;
Sidebar.Menu = _SidebarMenu2.default;
Sidebar.Toggler = _SidebarToggler2.default;

var styles = {
  wrapper: {
    top: (0, _Theme.getTheme)().appBar.height
  }
};

Sidebar.defaultProps = {
  style: {}
};

Sidebar.propTypes = {
  style: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    visible: state.sidebar.visible
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Sidebar);