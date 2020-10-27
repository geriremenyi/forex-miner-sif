import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ITradeSignal } from '~api/contracts/trade';
import { tradeSignalActions } from '~app/redux/actions/trade';
import { ITradeSignalsState } from '~app/redux/states/trade';

/**
 * Initial state of the trade signals slice of the global state
 */
const tradeSignalsInitialState: ITradeSignalsState = {
    tradeSignals: []
};

/**
 * Reducer to handle trade signals states
 */
export const tradeSignalsReducer = createReducer(tradeSignalsInitialState, {
    [tradeSignalActions.getTradeSignalsSuccess.type]: (state: ITradeSignalsState, action: PayloadAction<ITradeSignal[]>) => {
        state.tradeSignals = action.payload;
    }
});