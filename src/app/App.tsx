import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginPage } from '~app/user/login/page/LoginPage';
import { PrivateRoute } from '~components/PrivateRoute/PrivateRoute';

import './App.scss';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <PrivateRoute path="/" />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
};
