// Actions
const TOGGLE = 'entria-components/Sidebar/TOGGLE';

// Reducer
const initialState = {
  visible: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    default:
      return state;
  }
}

// Action Creators
export function toggleSidebar() {
  return { type: TOGGLE };
}
