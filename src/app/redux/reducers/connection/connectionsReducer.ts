// Library dependencies
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

// Local dependencies
import { IConnection } from '~api/contracts/connection';
import { connectionActions } from '~app/redux/actions/connection';
import { AddConnectionStatus, IConnectionsState } from '~app/redux/states/connection';

/**
 * Initial state of the trade signals slice of the global state
 */
const connectionsInitialState: IConnectionsState = {
    connections: [],
    addConnection: AddConnectionStatus.NotStarted
};

/**
 * Connection reducer
 */
export const connectionsReducer = createReducer(connectionsInitialState, {
    [connectionActions.getConnectionsSuccess.type]: (state: IConnectionsState, action: PayloadAction<IConnection[]>) => {
        state.connections = action.payload;
    },
    [connectionActions.addConnectionTriggered.type]: (state: IConnectionsState) => {
        state.addConnection = AddConnectionStatus.Started;
    },
    [connectionActions.addConnectionSuccess.type]: (state: IConnectionsState, action: PayloadAction<IConnection>) => {
        state.addConnection = AddConnectionStatus.NotStarted;
        state.connections.push(action.payload);
    }
});