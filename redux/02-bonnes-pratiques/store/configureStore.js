import redux from 'redux';
import reducer from './reducers.js';

export function configureStore() {
  /** @type {import('redux').Store} */
  const store = redux.legacy_createStore(reducer);

  // middleware (plugins) a enregistrer

  return store;
}
