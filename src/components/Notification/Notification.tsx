// Library dependencies
import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons/lib';
import { MdCheck, MdClose, MdError, MdInfo, MdWarning } from 'react-icons/md';
import { NotificationType } from '~common/types/notification';

// Local dependencies
import { INotificationProps } from '.';

// SASS module
import styles from './Notification.module.scss';

/**
 * Notification react component implementation
 */
export class Notification extends React.Component<INotificationProps> {

    /**
	 * Instance initialization
	 * 
	 * @param props Props of the notification
	 */
    constructor(props: INotificationProps) {
        // Init props
        super(props);
    }

    /**
	 * The render function is responsible for how to render the notification component.
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {
        return (
            <div className={`${styles.notification} ${this.getClass()} padding-sm`}>
                <div className={styles.notificationBody}>
                    <span>
                        <IconContext.Provider value={{ size: styles.iconSize }}>
                            { this.getIcon() }
                        </IconContext.Provider>
                    </span>
                    <span className='margin-left-sm'>{this.props.text}</span>
                </div>
                <div className={styles.notificationRemove} onClick={() => this.props.onRemove(this.props.id)}>
                    <IconContext.Provider value={{ size: styles.iconSize }}>
                        <MdClose />
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
}