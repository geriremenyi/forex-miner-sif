import { IHash } from "~common/types";
import { INotification } from "~common/types/notification";

/**
 * Notification area properties
 */
export interface INotificationAreaProps {
    /**
     * Array of notification properties
     */
    notifications: IHash<INotification>;
}