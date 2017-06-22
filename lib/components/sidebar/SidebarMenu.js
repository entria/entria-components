'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectableList = (0, _List.makeSelectable)(_List.List);

var SidebarMenu = function SidebarMenu(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: styles.wrapper },
    _react2.default.createElement(
      SelectableList,
      null,
      children
    )
  );
};

var styles = {
  wrapper: {
    marginTop: 20
  }
};

exports.default = SidebarMenu;