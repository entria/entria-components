'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentTitle = function (_Component) {
  _inherits(DocumentTitle, _Component);

  function DocumentTitle() {
    _classCallCheck(this, DocumentTitle);

    return _possibleConstructorReturn(this, (DocumentTitle.__proto__ || Object.getPrototypeOf(DocumentTitle)).apply(this, arguments));
  }

  _createClass(DocumentTitle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update(this.props.title);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var title = _ref.title;

      this.update(title);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'update',
    value: function update(title) {
      var documentTitle = [];

      if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        if (Array.isArray(title)) {
          documentTitle = documentTitle.concat(title);
        } else {
          documentTitle.push(title);
        }
      }

      document.title = documentTitle.join(' - ');
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return DocumentTitle;
}(_react.Component);

DocumentTitle.propTypes = {
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
};
DocumentTitle.defaultProps = {
  title: []
};
exports.default = DocumentTitle;