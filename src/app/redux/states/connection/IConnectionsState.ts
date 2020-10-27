import { IConnection } from "~api/contracts/connection";
import { AddConnectionStatus } from ".";

/**
 * Connections page state slice of the global state
 */
export interface IConnectionsState {
    /**
     * Connections
     */
    connections: IConnection[]

    /**
     * New connection addition
     */
    addConnection: AddConnectionStatus;
}