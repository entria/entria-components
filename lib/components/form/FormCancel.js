'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormCancel = function FormCancel(_ref) {
  var label = _ref.label,
      history = _ref.history;
  return _react2.default.createElement(_FlatButton2.default, { label: label, onTouchTap: function onTouchTap() {
      return history.goBack();
    }, style: styles.button });
};

var styles = {
  button: {
    marginLeft: 20
  }
};

FormCancel.defaultProps = {
  label: 'Cancel'
};

FormCancel.propTypes = {
  label: _propTypes2.default.string
};

exports.default = (0, _reactRouterDom.withRouter)(FormCancel);