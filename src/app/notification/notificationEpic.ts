import { LOCATION_CHANGE } from 'connected-react-router';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { tap, ignoreElements  } from 'rxjs/operators';

import { IRootAction } from 'src/store/IRootAction';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';
import { loginActionNames } from '~app/user/login/redux';
import { generateRandomId } from '~common/functions/misc';
import { NotificationType } from '~common/types/notification';
import { IRootState, store } from '~store';
import { notificationActions } from './notificationActions';

const loginFailedNotificationEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGIN.ERROR),
    tap((error) => store.dispatch(notificationActions.add({
        id: generateRandomId(),
        text: (error.payload as IProblemDetails).detail,
        type: NotificationType.Error
    }))),
    ignoreElements()
);

const registerFailedNotificationEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.REGISTER.ERROR),
    tap((error) => store.dispatch(notificationActions.add({
        id: generateRandomId(),
        text: (error.payload as IProblemDetails).detail,
        type: NotificationType.Error
    }))),
    ignoreElements()
);

const routeChangedNotificationEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(LOCATION_CHANGE),
    tap(() => store.dispatch(notificationActions.liquidate())),
    ignoreElements()
);

export const notificationEpic = (combineEpics(
    loginFailedNotificationEpic,
    registerFailedNotificationEpic,
    routeChangedNotificationEpic
));