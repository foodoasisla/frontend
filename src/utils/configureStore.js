import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './../reducers';


function configureStore(initialState, history) {
  const store = createStore(reducers,
                            initialState,
                            applyMiddleware(thunk,
                                            routerMiddleware(history),
                                            promiseMiddleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../reducers', () => {
      const nextRootReducer = require('./../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
