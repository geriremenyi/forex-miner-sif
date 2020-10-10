import { Epic, ofType } from "redux-observable";
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { RootAction } from "src/store/RootAction";
import { ApiClientFactory } from "~api/client";
import { IAuthentication } from "~api/contracts/user";
import { IRootState } from "~store";
import { loginActionNames, loginActions } from "./loginActions";

export const loginEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
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