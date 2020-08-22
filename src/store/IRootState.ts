import { RouterState } from 'connected-react-router';

import { ILoginState } from '~app/user/login/store/ILoginState';

export interface IRootState {
    login: ILoginState,
    router: RouterState
}