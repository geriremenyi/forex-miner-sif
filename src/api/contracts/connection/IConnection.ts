import { ITrade } from '~api/contracts/trade';

/**
 * Connection contract
 */
export interface IConnection {
    /**
     * Id of the connection
     */
    id: number;

    /**
     * Name of the connection
     */
    name: string;

    /**
     * Broker behind the connection
     */
    broker: string;

    /**
     * Type of the connection
     */
    type: string;

    /**
     * Balance of the connection
     */
    balance: number;

    /**
     * Profit or loss generated in the connection
     */
    profitLoss: number;

    /**
     * Trades open
     */
    openTrades: ITrade[];
}