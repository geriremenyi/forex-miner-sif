import { Observable } from 'rxjs';

import { IHttpClient } from '~api/http';
import { IUserLogin, ILoggedInUser, IRegistration, IUser } from '~api/contracts/user';

import { IApiClient } from '.';
import { IConnection, IConnectionCreation } from '~api/contracts/connection';
import { ITradeSignal } from '~api/contracts/trade';
import { IConnectionTest } from '~api/contracts/connection/IConnectionTest';
import { IConnectionTestResults } from '~api/contracts/connection/IConnectionTestResults';

/**
 * An {@link IApiClient} which actually connects to the API via HTTP REST calls.
 * It provides pulls the data via HTTP calls.
 */
export class HttpApiClient implements IApiClient {	

    /**
     * Base url of the REST API
     */
    private readonly API_URL: string = 'https://forex-miner.com/api';

    /**
     * Version of the REST API to use
     */
    private readonly API_VERSION: string = 'v1';

    /**
     * Initializes an instance of the {@link HttpApiClient}.
     * 
     * @param httpClient The {@link IHttpClient} instance to be able to fetch data.
     */
    constructor(private httpClient: IHttpClient) {}

    /**
     * Login via calling the corresponding REST API endpoint.
     * 
     * @param auth Authentication object containing the emaill address and password.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the logged in user details on successful login.
     */
    public login(auth: IUserLogin): Observable<ILoggedInUser> {
        return this.httpClient.post<IUserLogin, ILoggedInUser>(
            `${this.getEndpoint('users/login')}`,
            auth
        );
    }

    /**
     * Register via calling the corresponding REST API endpoint.
     * 
     * @param registration Registration object containing the required user fields for registration.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the registered user details on successful registration.
     */
    public register(registration: IRegistration): Observable<IUser> {
        return this.httpClient.post<IRegistration, IUser>(
            `${this.getEndpoint('users')}`,
            registration
        );
    }

    /**
     * Test a connection.
     * 
     * @param connectionTest The connection object to test.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the connection test results on success.
     */
    testConnection(connectionTest: IConnectionTest): Observable<IConnectionTestResults> {
        return this.httpClient.post<IConnectionTest, IConnectionTestResults>(
            `${this.getEndpoint('users/me/connections/test')}`,
            connectionTest
        );
    }

    /**
     * Create a connection.
     * 
     * @param connection Connection to create.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the craeted connection on success.
     */
    createConnection(connection: IConnectionCreation): Observable<IConnection> {
        return this.httpClient.post<IConnectionCreation, IConnection>(
            `${this.getEndpoint('users/me/connections')}`,
            connection
        );
    }

    /**
     * Get all connections for the logged in user.
     * 
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the array of connections on successful get.
     */
    getConnections(): Observable<IConnection[]> {
        return this.httpClient.get<IConnection[]>(`${this.getEndpoint('users/me/connections')}`);
    }

    /**
     * Get trade signals.
     * 
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the array of trade signals on successful get.
     */
    getTradeSignals(): Observable<ITradeSignal[]> {
        return this.httpClient.get<ITradeSignal[]>(`${this.getEndpoint('users/me/connections/trade-signals')}`);
    }

    /**
     * Full API URL property.
     * Getting the root URL via concatenating the base url and API version
     */
    private getEndpoint(endpoint: string): string {
        return `${this.API_URL}/${this.API_VERSION}/${endpoint}`;
    }
}