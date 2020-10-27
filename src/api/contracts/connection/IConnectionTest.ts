/**
 * Connection test contract
 */
export interface IConnectionTest {
    /**
     * Broker for the connection
     */
    broker: string;

    /**
     * Secret for the connection
     */
    secret: string;
}