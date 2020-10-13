import { RouterState } from 'connected-react-router';

import { ILoggedInUserState } from '~app/user/login/redux/ILoggedInUserState';
import { IHash } from '~common/types';
import { INotification } from '~common/types/notification';

export interface IRootState {
    user: ILoggedInUserState;
    router: RouterState;
    notifications: IHash<INotification>;
}