import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { loginReducer } from '~app/user/login/redux';
import { history } from './history';

export const rootReducer = combineReducers({
    login: loginReducer,
    router: connectRouter(history),
});
