import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "~api/models/user";

import { ILoginState } from "./ILoginState";
import { loginActions } from "./loginActions";

/**
 * Initial state of the login slice of the global state
 */
const loginInitialState: ILoginState = {
    isUserLoggedIn: false,
};

/**
 * Reducer to handle login actions
 */
export const loginReducer = createReducer(loginInitialState, {
    [loginActions.loginSuccess.type]: (state: ILoginState, action: PayloadAction<IUser>) => {
        state.isUserLoggedIn = true;
        state.loggedInUser = action.payload;
    }
});