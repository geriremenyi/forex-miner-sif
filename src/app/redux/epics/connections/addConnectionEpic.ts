// Library dependencies
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

// Local dependencies
import { ApiClientFactory } from '~api/client';
import { IConnectionCreation } from '~api/contracts/connection';
import { connectionActionNames, connectionActions } from '~app/redux/actions/connection';
import { IRootAction, IRootState } from '~store';


/**
 * Epic to handle connection addition
 * 
 * @param action$ The incoming action
 */
export const addConnectionEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(connectionActionNames.ADD_CONNECTION.START),
    mergeMap((action) =>
        ApiClientFactory.getServerApi().createConnection(action.payload as IConnectionCreation).pipe(
            map(connection => connectionActions.addConnectionSuccess(connection)),
            catchError((error) => of(connectionActions.addConnectionError(error)))
        )
    )
);