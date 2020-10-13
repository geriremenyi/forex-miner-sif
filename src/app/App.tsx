import React from 'react';
import { Provider } from 'react-redux';
import {  Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { PrivateRoute } from '~components/PrivateRoute/PrivateRoute';
import { history, store } from '~store';
import { LoginPageContainer } from './user/login/page/LoginPageContainer';
import { DashboardPage } from './dashboard/page';
import { LoginRoute } from '~components/LoginRoute';
import { NotificationAreaContainer } from '~app//notification';

export const App: React.FunctionComponent = () => {
    return ( 
        <Provider store={store}>
            <NotificationAreaContainer />
            <ConnectedRouter history={history}>
                <Switch>
                    <LoginRoute path="/login" component={LoginPageContainer} />
                    <LoginRoute path="/register" component={LoginPageContainer} />
                    <PrivateRoute path="/" component={DashboardPage} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};
