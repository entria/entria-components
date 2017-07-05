'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = createTheme;
exports.getTheme = getTheme;

var _glamor = require('glamor');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

var _objects = require('../utils/objects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOCAL_STORAGE_CONFIG = 'v1-customTheme';

var defaultConfig = {
  fontFamily: '"Montserrat", sans-serif',
  palette: {
    primary1Color: '#2B8CE9',
    primary2Color: '#FC615D',
    primary3Color: '#FE9958',
    accent1Color: '#129ACA',
    accent2Color: '#1598CE',
    accent3Color: '#999999',
    textColor: '#4F4F4F'
  },
  appBar: {
    height: 100,
    color: _colors.white,
    textColor: '#000',
    padding: 0
  },
  drawer: {
    color: _colors.white,
    width: 300
  }
};

function createTheme(customConfig) {
  localStorage.setItem(LOCAL_STORAGE_CONFIG, JSON.stringify(customConfig));

  var config = (0, _objects.deepConcat)(defaultConfig, customConfig);

  _glamor.css.global('html, body, #root, [data-reactroot]', {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    fontFamily: config.fontFamily
  });

  return (0, _getMuiTheme2.default)(config);
}

function getTheme() {
  var customConfig = localStorage.getItem(LOCAL_STORAGE_CONFIG) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONFIG)) : {};

  var config = (0, _objects.deepConcat)(defaultConfig, customConfig);

  return (0, _getMuiTheme2.default)(config);
}