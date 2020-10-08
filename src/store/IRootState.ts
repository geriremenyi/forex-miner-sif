import { RouterState } from 'connected-react-router';

import { ILoggedInUserState } from '~app/user/login/redux/ILoggedInUserState';
import { INotificationsState } from '~common/notifications/INotificationState';

export interface IRootState {
    user: ILoggedInUserState,
    router: RouterState,
    notifications: INotificationsState
}