/* Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import es6promise from 'es6-promise';
import 'isomorphic-fetch';

import App from './App';

/* Polyfills */
es6promise.polyfill();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
