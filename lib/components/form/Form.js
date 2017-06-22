'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _FormActions = require('./FormActions');

var _FormActions2 = _interopRequireDefault(_FormActions);

var _FormFieldSet = require('./FormFieldSet');

var _FormFieldSet2 = _interopRequireDefault(_FormFieldSet);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormSubmit = require('./FormSubmit');

var _FormSubmit2 = _interopRequireDefault(_FormSubmit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      valid: false
    }, _this.toggleValid = function (valid) {
      return function () {
        _this.setState({
          valid: valid
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onSubmit = _props.onSubmit;

      return _react2.default.createElement(
        _formsyReact2.default.Form,
        {
          onValid: this.toggleValid(true),
          onInvalid: this.toggleValid(false),
          onValidSubmit: onSubmit
        },
        children
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.Actions = _FormActions2.default;
Form.FieldSet = _FormFieldSet2.default;
Form.Input = _FormInput2.default;
Form.Submit = _FormSubmit2.default;

Form.defaultProps = {
  onSubmit: null
};

Form.propTypes = {
  onSubmit: _propTypes2.default.func
};

exports.default = Form;