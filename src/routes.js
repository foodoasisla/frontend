/* Libraries */
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import MapPage from './components/views/MapPage';

/* React components */
import BaseLayout from './components/layouts/BaseLayout';

function makeRoutes(store) {
  return (
    <Route path="/" component={BaseLayout}>
      <IndexRoute component={MapPage} />
    </Route>
  );
};

export default makeRoutes;
