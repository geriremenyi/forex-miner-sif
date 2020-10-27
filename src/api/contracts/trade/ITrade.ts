/**
 * Trade contract
 */
export interface ITrade {
    /**
     * Id of the trade
     */
    id: number;

    /**
     * Instrument of the trade
     */
    instrument: string;

    /**
     * Price which the trade was executed on
     */
    price: number;

    /**
     * Time of the trade opened
     */
    openTime: Date;

    /**
     * Units open
     */
    currentUnits: number;
}