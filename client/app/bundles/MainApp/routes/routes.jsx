import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import IndexContainer from '../containers/IndexContainer';
import NotFoundContainer from '../containers/NotFoundContainer';
import SecondContainer from '../containers/SecondContainer';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={IndexContainer}
    />
    <Route
      path="/route_example"
      component={SecondContainer}
    />
    <Route path="*" component={NotFoundContainer} />
  </Route>
);
