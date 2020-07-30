import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

/**
 * Private route component.
 * 
 * This component acts exactly like the Route component
 * but it hides the corresponding route component behind
 * an authentication check, and redirects everything to 
 * the login page if user is not logged in
 */
export class PrivateRoute extends React.Component<RouteProps> {

	public constructor(props: RouteProps) {
		super(props);

		this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
	}

	public render(): React.ReactElement {
		return (
			this.isUserLoggedIn() ? 
				<Route {...this.props} /> :  
				<Redirect to='/login' />
		);
	}

	private isUserLoggedIn(): boolean {
		// TODO: from global state
		return false;
	}

}
