import React from 'react';
import { Link } from 'react-router-dom';

import { INavigationProps } from '.';

import styles from './Navigation.module.scss';

export class Navigation extends React.Component<INavigationProps> {
    public render(): React.ReactNode {
        return (
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/trading-history">Trading History</Link>
                        </li>
                        <li>
                            <Link to="/analyses">Analyses</Link>
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <button onClick={this.props.handleLogout}>Logout</button>
                        </li> 
                    </ul>
                </nav>
            </div>
        );
    }
}