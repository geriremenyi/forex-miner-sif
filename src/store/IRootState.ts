import { RouterState } from 'connected-react-router';

import { ILoggedInUserState } from '~app/user/login/redux/ILoggedInUserState';

export interface IRootState {
    user: ILoggedInUserState,
    router: RouterState,
}