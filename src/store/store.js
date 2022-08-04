import { createStore, compose } from 'redux';

import reducers from './reducers/rootReducer';

const initStore = () => createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default initStore;
