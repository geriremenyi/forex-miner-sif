import { createAction } from '@reduxjs/toolkit';

import { AsyncActionName } from '~common/types';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';
import { ITradeSignal } from '~api/contracts/trade';

/**
 * Namespace of the trade signal actions
 */
const tradeSignalsNamespace = 'TRADE';

/**
 * Name of the trade signal actions
 */
export const tradeSignalActionNames = {
    GET_TRADE_SIGNALS: new AsyncActionName(tradeSignalsNamespace, 'GET_TRADE_SIGNALS'),
};

/**
 * Trade signal actions
 */
export const tradeSignalActions = {
    getTradeSignalsStart: createAction(tradeSignalActionNames.GET_TRADE_SIGNALS.START),
    getTradeSignalsSuccess: createAction<ITradeSignal[]>(tradeSignalActionNames.GET_TRADE_SIGNALS.SUCCESS),
    getTradeSignalsError: createAction<IProblemDetails>(tradeSignalActionNames.GET_TRADE_SIGNALS.ERROR),
};
