import { ITradeSignal } from '~api/contracts/trade';

/**
 * Trade signal page properties
 */
export interface ITradeSignalsPageProps {
    /**
     * Trade signals
     */
    tradeSignals: ITradeSignal[];
}