// Library dependencies
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

// Local dependencies
import { ApiClientFactory } from '~api/client';
import { tradeSignalActionNames, tradeSignalActions } from '~app/redux/actions/trade';
import { IRootAction, IRootState } from '~store';


/**
 * Epic to handle get trade signal async action
 * 
 * @param action$ The incoming action
 */
export const tradeSignalsEpic: Epic<IRootAction, IRootAction, IRootState> = (action$) => action$.pipe(
    ofType(tradeSignalActionNames.GET_TRADE_SIGNALS.START),
    mergeMap(() =>
        ApiClientFactory.getServerApi().getTradeSignals().pipe(
            map(tradeSignals =>  tradeSignalActions.getTradeSignalsSuccess(tradeSignals)),
            catchError((error) => of(tradeSignalActions.getTradeSignalsError(error)))
        )
    )
);