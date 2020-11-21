// Library dependencies
import { render } from '@testing-library/react';
import React from 'react';

// Local dependencies
import { Notification } from '.';
import { NotificationType } from '~common/types/notification';

// SASS module
import styles from './Notification.module.scss';

describe(Notification.name, () => {
    it('renders info notification', () => {
        // Arrange
        const id = 'notifId';
        const type = NotificationType.Info;
        const text = 'This is the notification message';
        const onRemove = () => {
            // Do nothing
        };

        // Act
        const { container } = render(<Notification id={id} type={type} text={text} onRemove={onRemove}/>);

        // Assert
        const notification = container.querySelector(`.${styles.info}`);
        expect(notification).toBeInTheDocument();
    });

    it('renders warning notification', () => {
        // Arrange
        const id = 'notifId';
        const type = NotificationType.Warning;
        const text = 'This is the notification message';
        const onRemove = () => {
            // Do nothing
        };

        // Act
        const { container } = render(<Notification id={id} type={type} text={text} onRemove={onRemove}/>);

        // Assert
        const notification = container.querySelector(`.${styles.warning}`);
        expect(notification).toBeInTheDocument();
    });

    it('renders error notification', () => {
        // Arrange
        const id = 'notifId';
        const type = NotificationType.Error;
        const text = 'This is the notification message';
        const onRemove = () => {
            // Do nothing
        };

        // Act
        const { container } = render(<Notification id={id} type={type} text={text} onRemove={onRemove}/>);

        // Assert
        const notification = container.querySelector(`.${styles.error}`);
        expect(notification).toBeInTheDocument();
    });

    it('renders success notification', () => {
        // Arrange
        const id = 'notifId';
        const type = NotificationType.Success;
        const text = 'This is the notification message';
        const onRemove = () => {
            // Do nothing
        };

        // Act
        const { container } = render(<Notification id={id} type={type} text={text} onRemove={onRemove}/>);

        // Assert
        const notification = container.querySelector(`.${styles.success}`);
        expect(notification).toBeInTheDocument();
    });
});