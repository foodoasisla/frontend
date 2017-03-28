/* Libraries */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import makeRoutes from './routes';
import INITIAL_STATE from './state';
import configureStore from './utils/configureStore';


const store = configureStore(INITIAL_STATE, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      history={history}
    >
      { makeRoutes(store) }
    </Router>
  </Provider>
);

export default App;
