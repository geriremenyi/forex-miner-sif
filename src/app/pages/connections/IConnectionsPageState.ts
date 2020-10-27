/**
 * Connections page component's state
 */
export interface IConnectionsPageState {
    /**
     * Name of a new connection
     */
    name: string;
    
    /**
     * Broker of a new connection
     */
    broker: string;

    /**
     * Secret of a new connection
     */
    secret: string;

    /**
     * External account id of a new connection
     */
    externalAccountId: string;
}