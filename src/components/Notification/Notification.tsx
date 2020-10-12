// Library dependencies
import React from 'react';

// Local dependencies
import { INotificationProps } from './';

// SASS module
import styles from './Notification.module.scss';

/**
 * Button react component implementation
 * Basically a wrapper around the button react component.
 */
export class Notification extends React.Component<INotificationProps> {

    /**
	 * Instance initialization
	 * 
	 * @param props Props of the button
	 */
    constructor(props: INotificationProps) {
        super(props);
    }

    /**
	 * The render function is responsible for how to render the notification component.
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {
        return (
            <div>This is a notification</div>
        );
    }
}