import React from 'react';

import { Notification } from '~components/Notification';
import { store } from '~store';
import { INotificationAreaProps } from './INotificationAreaProps';
import { notificationActions } from './notificationActions';

import styles from './NotificationArea.module.scss';

/**
 * Notification area react component
 */
export class NotificationArea extends React.Component<INotificationAreaProps> {

    public constructor(props: INotificationAreaProps) {
        super(props);

        this.removeNotification = this.removeNotification.bind(this);
    }

    /**
     * 
     */
    public render(): React.ReactNode {
        return (
            <div className={styles.notificationArea}>
                {Object.keys(this.props.notifications).map(notificationId => {
                    return <Notification key={notificationId} onRemove={this.removeNotification} {...this.props.notifications[notificationId]} />;
                })}
            </div>
        );
    }

    private removeNotification(notificationId: string): void {
        store.dispatch(notificationActions.remove(notificationId));
    }
}