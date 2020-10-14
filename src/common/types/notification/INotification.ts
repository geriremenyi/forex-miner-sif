import { NotificationType } from '.';

/**
 * Properties of the notification component
 */
export interface INotification {
    /**
     * Id of the notifications
     */
    id: string;

    /**
     * Type of the notification
     */
    type: NotificationType;

    /**
     * Text of the notification
     */
    text: string;

}