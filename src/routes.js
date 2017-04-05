/* Libraries */
import React from 'react';
import { Route } from 'react-router';

/* React components */
import BaseLayout from './components/layouts/BaseLayout';


function makeRoutes(store) {
  return (
    <Route path="/" component={BaseLayout} />
  );
};

export default makeRoutes;
