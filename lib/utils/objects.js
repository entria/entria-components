'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.deepConcat = deepConcat;
function deepConcat(objectOne, objectTwo) {
  var concatenated = _extends({}, objectOne);

  Object.keys(objectTwo).forEach(function (key) {
    if (_typeof(concatenated[key]) === 'object') {
      concatenated[key] = _extends({}, concatenated[key], objectTwo[key]);
    } else {
      concatenated[key] = objectTwo[key];
    }
  });

  return concatenated;
}