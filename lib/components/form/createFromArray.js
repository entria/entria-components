'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createFromArray;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
  onSubmit: function onSubmit() {
    return null;
  },
  initialValues: {}
};

function renderField(field, options) {
  var type = field.type || 'text';
  var value = (0, _get2.default)(options.initialValues, field.name);

  if (type === 'boolean') {
    var boolValue = !!value;

    return _react2.default.createElement(_Form2.default.Checkbox, _extends({
      key: field.name,
      name: field.name,
      label: field.placeholder,
      value: boolValue
    }, field));
  }

  return _react2.default.createElement(_Form2.default.Input, {
    key: field.name,
    name: field.name,
    type: type,
    placeholder: field.placeholder,
    value: value,
    required: field.required
  });
}

function createFromArray() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = _extends({}, defaultOptions, customOptions);

  var CreatedForm = function (_React$Component) {
    _inherits(CreatedForm, _React$Component);

    function CreatedForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CreatedForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreatedForm.__proto__ || Object.getPrototypeOf(CreatedForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        valid: false
      }, _this.toggleValid = function (isValid) {
        return function () {
          _this.setState({
            valid: isValid
          });
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CreatedForm, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Form2.default,
          {
            onSubmit: options.onSubmit,
            onValid: this.toggleValid(true),
            onInvalid: this.toggleValid(false)
          },
          _react2.default.createElement(
            _Form2.default.FieldSet,
            null,
            fields.map(function (field) {
              return renderField(field, options);
            })
          ),
          _react2.default.createElement(
            _Form2.default.Actions,
            null,
            _react2.default.createElement(_Form2.default.Cancel, null),
            _react2.default.createElement(_Form2.default.Submit, { disabled: !this.state.valid })
          )
        );
      }
    }]);

    return CreatedForm;
  }(_react2.default.Component);

  return _react2.default.createElement(CreatedForm, null);
}