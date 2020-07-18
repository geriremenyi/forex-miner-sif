import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

export const PrivateRoute = (routeProps : RouteProps): React.ReactElement<RouteProps> => {

  // TODO: from state
  const isUserLoggedIn = (): boolean => false;

  return isUserLoggedIn() ? <Route {...routeProps} /> :  <Redirect to={{ pathname: '/login' }} />;
};
