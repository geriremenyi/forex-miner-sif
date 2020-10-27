import { Observable } from 'rxjs';

import { IUserLogin, ILoggedInUser, IRegistration, IUser } from '~api/contracts/user';
import { IConnection, IConnectionCreation } from '~api/contracts/connection';
import { ITradeSignal } from '~api/contracts/trade';
import { IConnectionTestResults } from '~api/contracts/connection/IConnectionTestResults';
import { IConnectionTest } from '~api/contracts/connection/IConnectionTest';

/**
 * Interface definition for the forex-miner API client
 */
export interface IApiClient {
    /**
     * Login with the given credentials.
     * 
     * @param auth Authentication object containing the emaill address and password.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the logged in user details on successful login.
     */
    login(auth: IUserLogin): Observable<ILoggedInUser>;

    /**
     * Register the passed user.
     * 
     * @param registration Registration object containing the required user fields for registration.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the registered user details on successful registration.
     */
    register(registration: IRegistration): Observable<IUser>;

    /**
     * Test a connection.
     * 
     * @param connectionTest The connection object to test.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the connection test results on success.
     */
    testConnection(connectionTest: IConnectionTest): Observable<IConnectionTestResults>;

    /**
     * Create a connection.
     * 
     * @param connection Connection to create.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the craeted connection on success.
     */
    createConnection(connection: IConnectionCreation): Observable<IConnection>;

    /**
     * Get all connections for the logged in user.
     * 
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the array of connections on successful get.
     */
    getConnections(): Observable<IConnection[]>;

    /**
     * Get trade signals.
     * 
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the array of trade signals on successful get.
     */
    getTradeSignals(): Observable<ITradeSignal[]>;
}