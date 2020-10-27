// Local dependencies
import { loginActions } from '~app/user/login/redux';
import { notificationActions } from '~app/notification';
import { tradeSignalActions } from '~app/redux/actions/trade';
import { connectionActions } from '~app/redux/actions/connection/connectionsActions';

/**
 * Constructing IRootAction type via merging all action types
 */
export type IRootAction = 
    // User
    | ReturnType<typeof loginActions.loginStart>
    | ReturnType<typeof loginActions.loginSuccess>
    | ReturnType<typeof loginActions.loginFailed>
    | ReturnType<typeof loginActions.registerStart>
    | ReturnType<typeof loginActions.registerSuccess>
    | ReturnType<typeof loginActions.registerFailed>
    // Connection
    | ReturnType<typeof connectionActions.getConnectionsStart>
    | ReturnType<typeof connectionActions.getConnectionsSuccess>
    | ReturnType<typeof connectionActions.getConnectionsError>
    | ReturnType<typeof connectionActions.addConnectionTriggered>
    | ReturnType<typeof connectionActions.addConnectionStart>
    | ReturnType<typeof connectionActions.addConnectionSuccess>
    | ReturnType<typeof connectionActions.addConnectionError>
    // Trade
    | ReturnType<typeof tradeSignalActions.getTradeSignalsStart>
    | ReturnType<typeof tradeSignalActions.getTradeSignalsSuccess>
    | ReturnType<typeof tradeSignalActions.getTradeSignalsError>
    // Notification
    | ReturnType<typeof notificationActions.add>
    | ReturnType<typeof notificationActions.remove>