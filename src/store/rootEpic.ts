import { combineEpics } from 'redux-observable';
import { notificationEpic } from '~app/notification/notificationEpic';

import { loginEpic } from '~app/user/login/redux/loginEpic';

export const rootEpic = combineEpics(
    loginEpic,
    notificationEpic
);
