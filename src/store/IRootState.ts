import { RouterState } from 'connected-react-router';
import { IConnectionsState } from '~app/redux/states/connection/IConnectionsState';
import { ITradeSignalsState } from '~app/redux/states/trade';

import { ILoggedInUserState } from '~app/user/login/redux/ILoggedInUserState';
import { IHash } from '~common/types';
import { INotification } from '~common/types/notification';

/**
 * Interface representing the global state
 */
export interface IRootState {
    /**
     * User state
     */
    user: ILoggedInUserState;
    
    /**
     * Connections state
     */
    connections: IConnectionsState;

    /**
     * Trade signals state
     */
    tradeSignals: ITradeSignalsState;

    /**
     * Notification state
     */
    notifications: IHash<INotification>;

    /**
     * Router state
     */
    router: RouterState;
}