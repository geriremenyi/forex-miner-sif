import { push } from 'connected-react-router';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ignoreElements, catchError, map, mergeMap, tap } from 'rxjs/operators';

import { IRootAction } from 'src/store/IRootAction';
import { ApiClientFactory } from '~api/client';
import { IUserLogin, IRegistration, IUser, ILoggedInUser } from '~api/contracts/user';
import { notificationActions } from '~app/notification';
import { generateRandomId } from '~common/functions/misc';
import { NotificationType } from '~common/types/notification';
import { IRootState, store } from '~store';
import { loginActionNames, loginActions } from './loginActions';

export const userLoginEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGIN.START),
    mergeMap(action =>
        ApiClientFactory.getServerApi().login(action.payload as IUserLogin).pipe(
            map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return loginActions.loginSuccess(user);
            }),
            catchError((error) => of(loginActions.loginFailed(error)))
        )
    )
);

export const successfulLoginRedirectEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGIN.SUCCESS),
    tap((action) => {
        if((action.payload as ILoggedInUser).hasConnections) {
            store.dispatch(push('/'));
        } else {
            store.dispatch(push('/connections'));
        }

    }),
    ignoreElements()
);

export const userRegisterEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.REGISTER.START),
    mergeMap(action =>
        ApiClientFactory.getServerApi().register(action.payload as IRegistration).pipe(
            map(user => loginActions.registerSuccess(user)),
            catchError((error) => of(loginActions.registerFailed(error)))
        )
    )
);

export const successfulRegisterRedirectEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
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

export const logoutRedirectEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGOUT),
    tap(() => {
        localStorage.removeItem('user');
        return store.dispatch(push('/login'));
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