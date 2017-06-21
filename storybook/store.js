import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
