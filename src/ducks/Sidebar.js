/* @flow */

const LOCAL_STORAGE_SIDEBAR = 'v1-sidebarVisible';

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
  visible: localStorage.getItem(LOCAL_STORAGE_SIDEBAR) !== 'false',
};

export default function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case TOGGLE: {
      const visible = !state.visible;

      localStorage.setItem(LOCAL_STORAGE_SIDEBAR, visible);

      return {
        ...state,
        visible,
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
