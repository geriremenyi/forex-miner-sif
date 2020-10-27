// Library dependencies
import { createAction } from '@reduxjs/toolkit';

// Local dependencies
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';
import { IConnection, IConnectionCreation } from '~api/contracts/connection';
import { connectionActionNames } from '.';

/**
 * Dashboard actions
 */
export const connectionActions = {
    // Get connections
    getConnectionsStart: createAction(connectionActionNames.GET_CONNECTIONS.START),
    getConnectionsSuccess: createAction<IConnection[]>(connectionActionNames.GET_CONNECTIONS.SUCCESS),
    getConnectionsError: createAction<IProblemDetails>(connectionActionNames.GET_CONNECTIONS.ERROR),

    // Add connection
    addConnectionTriggered: createAction(connectionActionNames.ADD_CONNECTION_TRIGGERED),
    addConnectionStart: createAction<IConnectionCreation>(connectionActionNames.ADD_CONNECTION.START),
    addConnectionSuccess: createAction<IConnection>(connectionActionNames.ADD_CONNECTION.SUCCESS),
    addConnectionError: createAction<IProblemDetails>(connectionActionNames.ADD_CONNECTION.ERROR),
};
