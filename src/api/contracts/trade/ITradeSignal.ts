/**
 * Trade signal contract
 */
export interface ITradeSignal {
    /**
     * Time of the signal created
     */
    time: Date;

    /**
     * Instrument name
     */
    instrument: string;

    /**
     * Trade direction
     */
    direction: string;

    /**
     * Confidence of the trade signal
     */
    confidence: number;
}