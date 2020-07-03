import { combineReducers } from 'redux';

import { loginSlice } from '~app/user/login/store/LoginSlice';

export const rootReducer = combineReducers({
    login: loginSlice.reducer
})