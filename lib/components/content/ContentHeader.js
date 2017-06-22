'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Theme = require('../Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _ContentHeaderActions = require('./ContentHeaderActions');

var _ContentHeaderActions2 = _interopRequireDefault(_ContentHeaderActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentHeader = function ContentHeader(_ref) {
  var title = _ref.title,
      actions = _ref.actions;
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(
      'h1',
      { style: styles.title },
      title
    ),
    actions && _react2.default.createElement(
      'div',
      { style: styles.actions },
      actions
    )
  );
};

ContentHeader.Actions = _ContentHeaderActions2.default;

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    height: 100,
    boxSizing: 'border-box'
  },
  title: {
    width: '100%',
    margin: 0,
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: '-0.015em',
    color: _Theme2.default.palette.primary1Color
  },
  actions: {}
};

ContentHeader.defaultProps = {
  title: null,
  actions: null
};

ContentHeader.propTypes = {
  title: _propTypes2.default.string,
  actions: _propTypes2.default.node
};

exports.default = ContentHeader;