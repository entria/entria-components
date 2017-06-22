'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var muiTheme = (0, _getMuiTheme2.default)({
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
});

exports.default = muiTheme;