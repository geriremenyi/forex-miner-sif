import { IHash } from '~common/types';
import { INotificationProps } from '~components/Notification';

/**
 * Notifications state slice of the global state
 */
export interface INotificationsState {
    /**
     * Hashmap of notifications
     */
    notifications: IHash<INotificationProps>;
}