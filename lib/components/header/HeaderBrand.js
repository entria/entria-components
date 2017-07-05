'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brand = function Brand(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { style: _extends({}, styles.link, style), to: '/' },
    image ? _react2.default.createElement(BrandWithImage, { image: image, title: title }) : _react2.default.createElement(BrandWithoutImage, { title: title, subtitle: subtitle })
  );
};

var BrandWithImage = function BrandWithImage(_ref2) {
  var image = _ref2.image,
      title = _ref2.title;
  return _react2.default.createElement(
    'div',
    { style: styles.withImage },
    _react2.default.createElement('img', { src: image, title: title, alt: title, style: styles.image })
  );
};

var BrandWithoutImage = function BrandWithoutImage(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle;
  return _react2.default.createElement(
    'div',
    { style: styles.withoutImage },
    _react2.default.createElement(
      'h3',
      { style: styles.title },
      title
    ),
    _react2.default.createElement(
      'small',
      { style: styles.subtitle },
      subtitle
    )
  );
};

var styles = {
  link: {
    height: '100%',
    textDecoration: 'none',
    color: '#232323'
  },
  withImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  withoutImage: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    margin: 0,
    padding: 0,
    fontSize: 23
  },
  subtitle: {
    margin: 0,
    padding: 0,
    fontSize: 12.5,
    textTransform: 'uppercase'
  }
};

Brand.defaultProps = {
  style: {}
};

Brand.propTypes = {
  style: _propTypes2.default.object
};

exports.default = Brand;