'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuIcon = function MenuIcon(_ref) {
  var opened = _ref.opened,
      size = _ref.size,
      spaces = _ref.spaces,
      color = _ref.color;

  var linesHeight = size * 3;
  var spacesHeight = size * spaces * 3;
  var height = linesHeight + spacesHeight;

  var styles = {
    wrapper: (0, _glamor.css)({
      height: height,
      position: 'relative',
      transform: 'rotate(0deg)',
      transition: '.5s ease-in-out',
      '> span': {
        display: 'block',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: size,
        borderRadius: size,
        background: color,
        opacity: 1,
        transform: 'rotate(0deg)',
        transition: '.25s ease-in-out'
      },
      '> span:nth-child(1)': {
        top: 0
      },
      '> span:nth-child(2), > span:nth-child(3)': {
        top: size * spaces * 2
      },
      '> span:nth-child(4)': {
        top: size * spaces * 4,
        width: '80%'
      }
    }),
    opened: (0, _glamor.css)({
      '> span:nth-child(1), > span:nth-child(4)': {
        top: size * spaces * 1.5,
        width: 0,
        left: '50%'
      },
      '> span:nth-child(2)': {
        transform: 'rotate(45deg)'
      },
      '> span:nth-child(3)': {
        transform: 'rotate(-45deg)'
      }
    })
  };

  return _react2.default.createElement(
    'div',
    { className: styles.wrapper + ' ' + (opened ? styles.opened : '') },
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null)
  );
};

MenuIcon.defaultProps = {
  opened: false,
  size: 2,
  spaces: 1.5,
  color: '#323232'
};

MenuIcon.propTypes = {
  opened: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  spaces: _propTypes2.default.number,
  color: _propTypes2.default.string
};

exports.default = MenuIcon;