'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
exports.toggleSidebar = toggleSidebar;
var TOGGLE = 'entria-components/Sidebar/TOGGLE';

// Reducer


var initialState = {
  visible: true
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case TOGGLE:
      {
        return _extends({}, state, {
          visible: !state.visible
        });
      }
    default:
      return state;
  }
}

// Action Creators
function toggleSidebar() {
  return { type: TOGGLE };
}