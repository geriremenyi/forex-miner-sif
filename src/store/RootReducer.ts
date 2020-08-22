import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { loginSlice } from '~app/user/login/store/LoginSlice';
import { history } from './history';

export const rootReducer = combineReducers({
	login: loginSlice.reducer,
	router: connectRouter(history)
});
