// Library dependencies
import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons/lib';
import { MdCheck, MdError, MdInfo, MdWarning } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { NotificationType } from '~common/types/notification';

// Local dependencies
import { INotificationProps, INotificationState, NotificationStatus } from '.';

// SASS module
import styles from './Notification.module.scss';

/**
 * Notification react component implementation
 */
export class Notification extends React.Component<INotificationProps, INotificationState> {

    /**
	 * Instance initialization
	 * 
	 * @param props Props of the notification
	 */
    constructor(props: INotificationProps) {
        // Init props
        super(props);

        // Init state
        this.state = { status: NotificationStatus.Arriving };
        setTimeout(() => this.setState({ status: NotificationStatus.Show }), 300);

        // Init functions
        this.remove = this.remove.bind(this);
        this.prepareRemove = this.prepareRemove.bind(this);

        // Init removal
        if (this.props.timeout) {
            setTimeout(() => {
                this.prepareRemove();
            }, this.props.timeout);
        }
    }

    /**
	 * The render function is responsible for how to render the notification component.
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {
        return (
            <div className={`${styles.notification} ${this.getClass()} ${ this.state.status === NotificationStatus.Arriving ? styles.arriving : '' } ${ this.state.status === NotificationStatus.Leaving ? styles.leaving : '' } margin-bottom-md`}>
                <div className={styles.notificationBody}>
                    <span className={`${styles.notificationIcon} padding-sm`}>
                        <IconContext.Provider value={{ size: styles.iconSizeLarge }}>
                            { this.getIcon() }
                        </IconContext.Provider>
                    </span>
                    <span className={`${styles.notificationText} padding-sm margin-left-sm`}>{this.props.text}</span>
                </div>
                <div className={`${styles.notificationRemove} padding-sm`} onClick={this.prepareRemove}>
                    <IconContext.Provider value={{ size: styles.iconSizeSmall }}>
                        <AiFillCloseCircle />
                    </IconContext.Provider>
                </div>
            </div>
        );
    }

    private getClass(): string {
        switch (this.props.type) {
            case NotificationType.Info:
                return styles.info;
            case NotificationType.Warning:
                return styles.warning;
            case NotificationType.Error:
                return styles.error;
            case NotificationType.Success:
                return styles.success;
        }
    }

    private getIcon(): ReactNode {
        switch (this.props.type) {
            case NotificationType.Info:
                return <MdInfo />;
            case NotificationType.Warning:
                return <MdWarning />;
            case NotificationType.Error:
                return <MdError />;
            case NotificationType.Success:
                return <MdCheck />;
        }
    }

    private prepareRemove(): void {
        this.setState({ status: NotificationStatus.Leaving });
        setTimeout(() => this.remove(), 300);
    }

    private remove():void {
        this.props.onRemove(this.props.id);
    }
}