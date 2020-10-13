import { push } from "connected-react-router";
import { combineEpics, Epic, ofType } from "redux-observable";
import { of } from 'rxjs';
import { ignoreElements, catchError, map, mergeMap, tap } from 'rxjs/operators';

import { RootAction } from "src/store/RootAction";
import { ApiClientFactory } from "~api/client";
import { IAuthentication, IRegistration, IUser } from "~api/contracts/user";
import { notificationActions } from "~app/notification";
import { generateRandomId } from "~common/functions/misc";
import { NotificationType } from "~common/types/notification";
import { IRootState, store } from "~store";
import { loginActionNames, loginActions } from "./loginActions";

export const userLoginEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGIN.START),
    mergeMap(action =>
        ApiClientFactory.getServerApi().login(action.payload as IAuthentication).pipe(
            map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return loginActions.loginSuccess(user);
            }),
            catchError((error) => of(loginActions.loginFailed(error)))
        )
    )
);

export const successfulLoginRedirectEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGIN.SUCCESS),
    tap(() => store.dispatch(push('/'))),
    ignoreElements()
);

export const userRegisterEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.REGISTER.START),
    mergeMap(action =>
        ApiClientFactory.getServerApi().register(action.payload as IRegistration).pipe(
            map(user => loginActions.registerSuccess(user)),
            catchError((error) => of(loginActions.registerFailed(error)))
        )
    )
);

export const successfulRegisterRedirectEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.REGISTER.SUCCESS),
    tap((user) => {
        const registeredUser = user.payload as IUser;

        return store.dispatch(notificationActions.add({
            id: generateRandomId(),
            text: `Registration was successful for '${registeredUser.firstName} ${registeredUser.lastName}' with the email address ${registeredUser.email}`,
            type: NotificationType.Success
        }));
    }),
    ignoreElements()
);

export const logoutRedirectEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGOUT),
    tap(() => {
        localStorage.removeItem('user');
        return store.dispatch(push('/login'))
    }),
    ignoreElements()
);

export const loginEpic = combineEpics(
    userLoginEpic,
    successfulLoginRedirectEpic,
    userRegisterEpic,
    successfulRegisterRedirectEpic,
    logoutRedirectEpic
);