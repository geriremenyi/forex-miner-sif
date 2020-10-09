import React from 'react';
import { Link } from 'react-router-dom';

import { IDashboardPageProps } from ".";

export class DashboardPage extends React.Component<IDashboardPageProps> {
    public render() {
        return (
            <div>
                <span>This is actually the dashboard...</span>
                <Link to="/login">Try to open login</Link>
            </div>
        );
    }
}