import React from 'react';

import { INavigationProps } from '.';

export class Navigation extends React.Component<INavigationProps> {
    public render() {
        return (
            <div><button onClick={this.props.handleLogout}>Logout</button></div>
        );
    }
}