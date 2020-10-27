import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { GiAerialSignal } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { NavigationItem } from '~components/NavigationItem';

import { INavigationProps } from '.';

import styles from './Navigation.module.scss';
import { store } from '~store';
import { loginActions } from '~app/user/login/redux';
import { ActiveMenu } from './ActiveMenu';

export class Navigation extends React.Component<INavigationProps> {

    public constructor(props: INavigationProps) {
        // Init props
        super(props);

        // Init functions
        this.logout = this.logout.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.navigation}>
                <nav>
                    <div className={`${styles.navigationItemContainer}`}>
                        <Link to='/' className={'padding-top-xs padding-right-md padding-bottom-xs padding-left-md'}>
                            <img alt='logo' className={`${styles.logoIcon}`} src={process.env.PUBLIC_URL + '/icon/logo_black_and_white.png'} />
                        </Link>
                        <NavigationItem text='Dashboard' action='/' icon={<MdDashboard />} isActive={this.props.activeMenu === ActiveMenu.Dashboard} />
                        <NavigationItem text='Trade Signals' action='/trade-signals' icon={<GiAerialSignal />} isActive={this.props.activeMenu === ActiveMenu.TradeSignals} />
                    </div>
                    <div className={`${styles.navigationItemContainer} ${styles.navLeft}`}>
                        <NavigationItem action='/connections' icon={<IoMdSettings />} isActive={this.props.activeMenu === ActiveMenu.Connections}/>
                        <NavigationItem action={this.logout} icon={<RiLogoutCircleRLine />}/>
                    </div>
                </nav>
            </div>
        );
    }

    private logout(): void {
        store.dispatch(loginActions.logout());
    }
}