import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { store } from '~store';

/**
 * Private route component.
 * 
 * This component acts exactly like the Route component
 * but it hides the corresponding route component behind
 * an authentication check, and redirects everything to 
 * the login page if user is not logged in
 */
export class PrivateRoute extends React.Component<RouteProps> {

    /**
	 * Component initialization
	 * 
	 * @param props Route properties
	 */
    public constructor(props: RouteProps) {
        super(props);
    }

    /**
	 * Component render
	 * 
	 * @returns The react element rendered
	 */
    public render(): React.ReactElement {
        return (
            store.getState().login.isUserLoggedIn ? 
                <Route {...this.props} /> :  
                <Redirect to='/login' />
        );
    }

}
