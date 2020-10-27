import { IConnection } from "~api/contracts/connection";
import { AddConnectionStatus } from "~app/redux/states/connection";

/**
 * Connection page component's properties
 */
export interface IConnectionsPageProps {
    /**
     * List of already existing connections
     */
    connections: IConnection[];

    /**
     * Add connection status
     */
    addConnection: AddConnectionStatus;
}