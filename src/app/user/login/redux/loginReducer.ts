import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { IAuthenticatedUser } from '~api/contracts/user';

import { ILoggedInUserState } from './ILoggedInUserState';
import { loginActions } from './loginActions';

/**
 * Initial state of the login slice of the global state
 */
const localStoreLoggedInUser = JSON.parse(localStorage.getItem('user') ?? 'null') as IAuthenticatedUser;
const loggedInUserInitialState: ILoggedInUserState = {
    isUserLoggedIn: localStoreLoggedInUser ? true : false,
    loggedInUser: localStoreLoggedInUser ?? undefined
};

/**
 * Reducer to handle login actions
 */
export const loginReducer = createReducer(loggedInUserInitialState, {
    [loginActions.loginSuccess.type]: (state: ILoggedInUserState, action: PayloadAction<IAuthenticatedUser>) => {
        state.isUserLoggedIn = true;
        state.loggedInUser = action.payload;
    },
    [loginActions.logout.type]: (state: ILoggedInUserState) => {
        state.isUserLoggedIn = false;
        state.loggedInUser = undefined;
    }
});