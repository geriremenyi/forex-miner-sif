// Library dependencies
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Local dependencies
import { loginReducer } from '~app/user/login/redux';
import { history } from '.';
import { notificationReducer } from '~app/notification/notificationReducer';
import { tradeSignalsReducer } from '~app/redux/reducers/trade';
import { connectionsReducer } from '~app/redux/reducers/connection';

/**
 * Root reducer.
 * 
 * Creating root reducer via combining all
 * reducers implemented in the application
 */
export const rootReducer = combineReducers({
    // User
    login: loginReducer,

    // Dashboard
    connections: connectionsReducer,

    // Trade
    tradeSignals: tradeSignalsReducer,

    // Notification
    notifications: notificationReducer,

    // Router
    router: connectRouter(history),
});
