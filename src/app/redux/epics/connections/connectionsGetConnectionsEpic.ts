// Library dependencies
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

// Local dependencies
import { ApiClientFactory } from '~api/client';
import { connectionActionNames, connectionActions } from '~app/redux/actions/connection';
import { IRootAction, IRootState } from '~store';


/**
 * Epic to handle get connections action
 * 
 * @param action$ The incoming action
 */
export const connectionsGetConnectionsEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(connectionActionNames.GET_CONNECTIONS.START),
    mergeMap(() =>
        ApiClientFactory.getServerApi().getConnections().pipe(
            map(connections =>  connectionActions.getConnectionsSuccess(connections)),
            catchError((error) => of(connectionActions.getConnectionsError(error)))
        )
    )
);