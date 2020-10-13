import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { loginReducer } from '~app/user/login/redux';
import { history } from './history';
import { notificationReducer } from '~app/notification/notificationReducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    router: connectRouter(history),
    notifications: notificationReducer
});
