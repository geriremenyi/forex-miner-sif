// Local dependencies
import { AsyncActionName } from '~common/types';

/**
 * Namespace of the dashboard actions
 */
const connectionNamespace = 'CONNECTION';

/**
 * Name of the dashboard actions
 */
export const connectionActionNames = {
    GET_CONNECTIONS: new AsyncActionName(connectionNamespace, 'GET_CONNECTIONS'),
    ADD_CONNECTION_TRIGGERED: `${connectionNamespace}/ADD_CONNECTION/TRIGGERED`,
    ADD_CONNECTION: new AsyncActionName(connectionNamespace, 'ADD_CONNECTION'),
};