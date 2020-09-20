import { RouterState } from 'connected-react-router';

import { ILoginState } from '~app/user/login/redux/ILoginState';

export interface IRootState {
    login: ILoginState,
    router: RouterState
}