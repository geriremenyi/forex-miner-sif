import { INotification } from "~common/types/notification";

/**
 * Properties of the notification component
 */
export interface INotificationProps extends INotification {
    /**
     * On remove function
     */
    onRemove: (notificationId: string) => void
}