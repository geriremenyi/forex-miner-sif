import { createAction } from "@reduxjs/toolkit";

import { IAuthentication, IUser } from "~api/models/user";
import { AsyncActionName } from "~common/types";

/**
 * Namespace of the login actions
 */
const loginActionsNamespace = 'USER';

/**
 * Name of the login actions
 */
const loginActionNames = {
    LOGIN: new AsyncActionName(loginActionsNamespace, 'LOGIN'),
    LOGOUT: new AsyncActionName(loginActionsNamespace, 'LOGOUT'),
    REGISTER: new AsyncActionName(loginActionsNamespace, 'REGISTER')
};

/**
 * Login actions which are either handled through a redux-observable or a login reducer
 */
export const loginActions = {
    loginStart: createAction<IAuthentication>(loginActionNames.LOGIN.START),
    loginSuccess: createAction<IUser>(loginActionNames.LOGIN.SUCCESS)
};
