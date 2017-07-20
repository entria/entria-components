'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var visible = _ref.visible,
      background = _ref.background,
      zIndex = _ref.zIndex,
      size = _ref.size,
      thickness = _ref.thickness;

  var styles = {
    wrapper: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: visible ? zIndex : -1,
      opacity: visible ? 1 : 0,
      transition: 'all 0.2s',
      background: background,
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.wrapper },
    _react2.default.createElement(_CircularProgress2.default, { size: size, thickness: thickness })
  );
};

Loading.defaultProps = {
  visible: true,
  background: '#FFFFFF',
  zIndex: 9999
};

Loading.propTypes = {
  visible: _propTypes2.default.bool,
  background: _propTypes2.default.string,
  zIndex: _propTypes2.default.number
};

exports.default = Loading;