import { createAction } from '@reduxjs/toolkit';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';

import { IUserLogin, ILoggedInUser, IRegistration, IUser } from '~api/contracts/user';
import { AsyncActionName } from '~common/types';

/**
 * Namespace of the login actions
 */
const loginActionsNamespace = 'USER';

/**
 * Name of the login actions
 */
export const loginActionNames = {
    LOGIN: new AsyncActionName(loginActionsNamespace, 'LOGIN'),
    LOGOUT: `${loginActionsNamespace}/LOGOUT`,
    REGISTER: new AsyncActionName(loginActionsNamespace, 'REGISTER')
};

/**
 * Login actions which are either handled through a redux-observable or a login reducer
 */
export const loginActions = {
    loginStart: createAction<IUserLogin>(loginActionNames.LOGIN.START),
    loginSuccess: createAction<ILoggedInUser>(loginActionNames.LOGIN.SUCCESS),
    loginFailed: createAction<IProblemDetails>(loginActionNames.LOGIN.ERROR),
    logout: createAction<void>(loginActionNames.LOGOUT),
    registerStart: createAction<IRegistration>(loginActionNames.REGISTER.START),
    registerSuccess: createAction<IUser>(loginActionNames.REGISTER.SUCCESS),
    registerFailed: createAction<IProblemDetails>(loginActionNames.REGISTER.ERROR)
};
