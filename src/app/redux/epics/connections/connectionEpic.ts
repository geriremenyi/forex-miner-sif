import { combineEpics } from 'redux-observable';
import { addConnectionEpic } from './addConnectionEpic';
import { connectionsGetConnectionsEpic } from './connectionsGetConnectionsEpic';

/**
 * Dashboard root epic
 * 
 * Combine all dashboard epics together and
 * export them as the one dashboard root epic
 */
export const connectionEpic = combineEpics(
    addConnectionEpic,
    connectionsGetConnectionsEpic
);