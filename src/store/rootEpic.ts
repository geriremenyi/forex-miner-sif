import { combineEpics } from 'redux-observable';
import { notificationEpic } from '~app/notification/notificationEpic';
import { connectionEpic } from '~app/redux/epics/connections';
import { tradeSignalsEpic } from '~app/redux/epics/trade';

import { loginEpic } from '~app/user/login/redux/loginEpic';

/**
 * Root epic
 * 
 * Create root epic via combining all epics
 * implemented in the application.
 */
export const rootEpic = combineEpics(
    loginEpic,
    connectionEpic,
    tradeSignalsEpic,
    notificationEpic
);
