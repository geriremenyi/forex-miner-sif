/**
 * Result of a connection test contract
 */
export interface IConnectionTestResults {
    /**
     * Type of the connection
     */
    type: string;

    /**
     * List of account ids found for the connection
     */
    accountIds: string[];
}