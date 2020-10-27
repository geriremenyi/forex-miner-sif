import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { store } from '~store';

/**
 * Login route component
 * 
 * This component acts exactly like the Route component
 * but it hides the corresponding login/register component behind
 * an authentication check, and redirects everything to 
 * the dashboard is there is a user logged in
 */
export class LoginRoute extends React.Component<RouteProps> {

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
                <Redirect to='/' />:
                <Route {...this.props} />    
        );
    }

}
