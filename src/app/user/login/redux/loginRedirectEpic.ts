import { push } from "connected-react-router";
import { Epic, ofType } from "redux-observable";
import { tap, ignoreElements } from 'rxjs/operators';

import { RootAction } from "src/store/RootAction";
import { IRootState, store } from "~store";
import { loginActionNames } from "./loginActions";

export const loginRedirectEpic: Epic<RootAction, RootAction, IRootState> = (action$) => action$.pipe(
    ofType(loginActionNames.LOGIN.SUCCESS),
    tap(() => store.dispatch(push('/'))),
    ignoreElements()
);