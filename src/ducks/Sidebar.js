/* @flow */

// Actions
const TOGGLE: string = 'entria-components/Sidebar/TOGGLE';

// Reducer
type State = {
  visible: boolean,
};

type Action = {
  type: string,
};

const initialState: State = {
  visible: true,
};

export default function reducer(state: State = initialState, action: Action) {
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
export function toggleSidebar(): Action {
  return { type: TOGGLE };
}
