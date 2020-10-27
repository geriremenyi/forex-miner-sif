/**
 * Connection creation contract
 */
export interface IConnectionCreation {
    /**
     * Name of the connection
     */
    name: string;

    /**
     * Broker to use
     */
    broker: string;

    /**
     * Secret for the connection
     */
    secret: string;

    /**
     * External account id
     */
    externalAccountId: string;
}