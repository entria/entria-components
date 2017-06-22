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

var _Theme = require('../Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _ContentBody = require('./ContentBody');

var _ContentBody2 = _interopRequireDefault(_ContentBody);

var _ContentHeader = require('./ContentHeader');

var _ContentHeader2 = _interopRequireDefault(_ContentHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var sidebar = _ref.sidebar,
      style = _ref.style,
      children = _ref.children;

  var stylesWrapper = _extends({}, styles.wrapper, style);
  if (!sidebar.visible) {
    stylesWrapper.paddingLeft = 0;
  }

  return _react2.default.createElement(
    'div',
    { style: stylesWrapper },
    children
  );
};

Content.Body = _ContentBody2.default;
Content.Header = _ContentHeader2.default;

var styles = {
  wrapper: {
    minHeight: '100%',
    paddingTop: _Theme2.default.appBar.height,
    paddingLeft: _Theme2.default.drawer.width,
    transitionProperty: 'padding',
    transitionDuration: '300ms',
    boxSizing: 'border-box'
  }
};

Content.defaultProps = {
  style: {}
};

Content.propTypes = {
  style: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sidebar: state.sidebar
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Content);