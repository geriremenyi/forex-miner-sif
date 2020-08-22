import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { PrivateRoute } from '~components/PrivateRoute/PrivateRoute';
import { history, store } from '~store';
import { LoginPageContainer } from './user/login/store/LoginPageContainer';

export const App: React.FunctionComponent = () => {
	return ( 
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route path="/login" component={LoginPageContainer} />
					<Route path="/register" component={LoginPageContainer} />
					<PrivateRoute path="/" />
				</Switch>
			</ConnectedRouter>
		</Provider>
	);
};
