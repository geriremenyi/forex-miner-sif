import { ITradeSignal } from '~api/contracts/trade';

/**
 * Trade signals slice of the global state
 */
export interface ITradeSignalsState {
    /**
     * List of trade signals
     */
    tradeSignals: ITradeSignal[];
}