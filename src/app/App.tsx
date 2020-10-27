import React from 'react';
import { Provider } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { PrivateRoute } from '~components/PrivateRoute/PrivateRoute';
import { history, store } from '~store';
import { LoginPageContainer } from './user/login/page/LoginPageContainer';
import { LoginRoute } from '~components/LoginRoute';
import { NotificationAreaContainer } from '~app//notification';
import { NavigationContainer } from './navigation';


// SASS module
import styles from './App.module.scss';
import { TradeSignalsPageContainer } from './pages/trade-signals/TradeSignalsPageContainer';
import { DashboardPageContainer } from './pages/dashboard/DashboardPageContainer';
import { ConnectionsPageContainer } from './pages/connections/ConnectionPageContainer';

export const App: React.FunctionComponent = () => {
    return ( 
        <Provider store={store}>
            <NotificationAreaContainer />
            <ConnectedRouter history={history}>
                <Switch>
                    <LoginRoute path="/login" component={LoginPageContainer} />
                    <LoginRoute path="/register" component={LoginPageContainer} />
                    <PrivateRoute path="/">
                        <NavigationContainer />
                        <div className={styles.main}>
                            <Switch>
                                <Route path="/connections" component={ConnectionsPageContainer} />
                                <Route path="/trade-signals" component={TradeSignalsPageContainer} />
                                <Route path="/" component={DashboardPageContainer} />
                            </Switch>
                        </div>
                    </PrivateRoute>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};