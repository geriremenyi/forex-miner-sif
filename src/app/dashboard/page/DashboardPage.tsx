import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '~app/navigation/Navigation';
import { loginActions } from '~app/user/login/redux';
import { store } from '~store';

import { IDashboardPageProps } from '.';

export class DashboardPage extends React.Component<IDashboardPageProps> {

    public constructor(props: IDashboardPageProps) {
        // Init props
        super(props);

        // Init functions
        this.logout = this.logout.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <>
                <Navigation handleLogout={this.logout} />
                <div>
                    <span>This is actually the dashboard...</span>
                    <Link to="/login">Try to open login</Link>
                </div>
            </>
        );
    }

    private logout() {
        store.dispatch(loginActions.logout());
    }
}