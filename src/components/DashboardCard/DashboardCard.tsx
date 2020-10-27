// Library dependencies
import React from 'react';
import { IconContext } from 'react-icons/lib';

// Local dependencies
import { IDashboardCardProps } from './';

// SASS module
import styles from './DashboardCard.module.scss';

/**
 * Dashboard card react component implementation
 * A well styled card to show on top of dashboards
 */
export class DashboardCard extends React.Component<IDashboardCardProps> {
    /**
	 * The render function is responsible to render the dashboard card component.
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {
        return (
            <div className={`margin-top-lg padding-md ${styles.dashboardCard}`}>
                <div className={`padding-sm ${styles.dashboardCardIcon}`}>
                    <IconContext.Provider value={{ size: styles.iconSizeLarge }}>
                        { this.props.icon }
                    </IconContext.Provider>
                </div>
                <div className={`${styles.dashboardCardTitle}`}>
                    <span>{ this.props.title }</span>
                </div>
                <div className={`${styles.dashboardCardValue}`}>
                    <span>
                        <b>{ this.props.value ?? '-' }</b>
                    </span>
                </div>
                <div className={`${styles.dashboardCardDivider}`}>
                    <hr />
                </div>
                <div className={`${styles.dashboardCardDescription}`}>
                    <span>{ this.props.description }</span>
                </div>
            </div>
        );
    }

}