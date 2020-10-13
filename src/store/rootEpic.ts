import { combineEpics } from 'redux-observable';
import { notificationEpic } from '~app/notification/notificationEpic';

import { loginEpic } from '~app/user/login/redux/loginEpic';
import { loginRedirectEpic } from '~app/user/login/redux/loginRedirectEpic';

export const rootEpic = combineEpics(
    loginEpic,
    loginRedirectEpic,
    notificationEpic
);
