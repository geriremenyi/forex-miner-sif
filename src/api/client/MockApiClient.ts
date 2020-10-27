import { Observable, of, throwError } from 'rxjs';
import { IConnection, IConnectionCreation } from '~api/contracts/connection';
import { IConnectionTest } from '~api/contracts/connection/IConnectionTest';
import { IConnectionTestResults } from '~api/contracts/connection/IConnectionTestResults';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';
import { ITradeSignal } from '~api/contracts/trade';

import { IUserLogin, ILoggedInUser, IRegistration, IUser } from '~api/contracts/user';

import { IApiClient } from '.';

/**
 * A mock version of the {@link IApiClient}.
 * It provides hardcoded values instead of pulling data via HTTP API calls.
 */
export class MockApiClient implements IApiClient {
    /**
     * Mock login.
     * 
     * @param auth Authentication object containing the emaill address and password.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the logged in user details on successful login.
     */
    public login(auth: IUserLogin): Observable<ILoggedInUser> {
        if (
            (auth.email === 'test@forex-miner.com' && auth.password === 'TopSecretPass!4')
            || (auth.email === 'test-conectionless@forex-miner.com' && auth.password === 'IHaveNoConnect!ons1')
        ) {
            return of({
                userId: 'a16e2102-8af0-4b1c-ba03-e6785976091c',
                email: auth.email,
                firstName: 'Elek',
                lastName: 'Test',
                hasConnections: auth.email === 'test@forex-miner.com',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiZW1haWxBZGRyZXNzIjoidGVzdEBmb3JleC1taW5lci5jb20iLCJmaXJzdE5hbWUiOiJFbGVrIiwibGFzdE5hbWUiOiJUZXN0IiwiaWF0IjoxNTE2MjM5MDIyfQ.ZgcWf_f_xStMtqpP870afnRIP4WqTytrO_PZGQ_FVDc'
            });
        } else {
            const error: IProblemDetails = {
                status: 404,
                type: 'NOT_FOUND',
                detail: 'Invalid email or password',
                title: 'Invalid email or password' 
            };
            return throwError(error);
        }
    }

    /**
     * Mock register.
     * 
     * @param registration Registration object containing the required user fields for registration.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the registered user details on successful registration.
     */
    public register(registration: IRegistration): Observable<IUser> {
        if (registration.email === 'already-there@forex-miner.com' ) {
            const error: IProblemDetails = {
                status: 400,
                type: 'BAD_REQUEST',
                detail: 'There is already a user with this email address.',
                title: 'Email is taken.' 
            };
            return throwError(error);
        } else {
            return of({
                userId: 'bf9ca4a0-9558-46f1-95dc-c39a8f39cb84',
                email: registration.email,
                firstName: registration.firstName,
                lastName: registration.lastName,
                hasConnections: false
            });
        }
    }

    /**
     * Test a connection.
     * 
     * @param connectionTest The connection object to test.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the connection test results on success.
     */
    testConnection(connectionTest: IConnectionTest): Observable<IConnectionTestResults> {
        if(connectionTest.broker === 'Oanda') {
            return of({
                type: 'Demo',
                accountIds: ['111-111-11111111-111']
            });
        } else {
            const error: IProblemDetails = {
                status: 400,
                type: 'BAD_REQUEST',
                detail: 'Connection details given are broken.',
                title: 'Connection test failed.' 
            };
            return throwError(error);
        }
    }

    /**
     * Create a connection.
     * 
     * @param connection Connection to create.
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the craeted connection on success.
     */
    createConnection(connection: IConnectionCreation): Observable<IConnection> {
        if(connection.broker === 'Oanda') {
            return of({
                id: 1234,
                name: connection.name,
                broker: connection.broker,
                type: 'Demo',
                balance: 1000,
                openTrades: [],
                profitLoss: 0
            });
        } else {
            const error: IProblemDetails = {
                status: 400,
                type: 'BAD_REQUEST',
                detail: 'Connection details given are broken.',
                title: 'Connection creation failed.' 
            };
            return throwError(error);
        }
    }

    /**
     * Get all connections for the logged in user.
     * 
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the array of connections on successful get.
     */
    getConnections(): Observable<IConnection[]> {
        const userString = localStorage.getItem('user');
        let user: ILoggedInUser;
        if (userString === null) {
            user =  {
                userId: 'a16e2102-8af0-4b1c-ba03-e6785976091c',
                email: 'test@forex-miner.com',
                firstName: 'Elek',
                lastName: 'Test',
                hasConnections: true,
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiZW1haWxBZGRyZXNzIjoidGVzdEBmb3JleC1taW5lci5jb20iLCJmaXJzdE5hbWUiOiJFbGVrIiwibGFzdE5hbWUiOiJUZXN0IiwiaWF0IjoxNTE2MjM5MDIyfQ.ZgcWf_f_xStMtqpP870afnRIP4WqTytrO_PZGQ_FVDc'
            };
        } else {
            user = JSON.parse(userString) as ILoggedInUser;
        }

        if (user.hasConnections) {
            const connections: IConnection[] = [
                {
                    id: 12345,
                    name: 'Fake Connection',
                    broker: 'Oanda',
                    type: 'Demo',
                    balance: 10000,
                    openTrades: [
                        {
                            id: 1,
                            instrument: 'EUR_USD',
                            price: 1.1825,
                            currentUnits: 100,
                            openTime: new Date()
                        },
                        {
                            id: 2,
                            instrument: 'EUR_USD',
                            price: 1.1825,
                            currentUnits: 100,
                            openTime: new Date(2020, 9, 12)
                        },
                        {
                            id: 3,
                            instrument: 'EUR_USD',
                            price: 1.1825,
                            currentUnits: 100,
                            openTime: new Date(2020, 9, 10)
                        },
                        {
                            id: 4,
                            instrument: 'EUR_USD',
                            price: 1.1825,
                            currentUnits: 100,
                            openTime: new Date(2020, 8, 20)
                        },
                        {
                            id: 5,
                            instrument: 'EUR_USD',
                            price: 1.1825,
                            currentUnits: 100,
                            openTime: new Date(2020, 7, 21)
                        }
                    ],
                    profitLoss: -245.12
                }
            ];

            return of(connections);
        } else {
            return of([]);
        }
    }

    /**
     * Get trade signals.
     * 
     * @returns {@link https://rxjs-dev.firebaseapp.com/guide/observable | Observable} which emmits the array of trade signals on successful get.
     */
    getTradeSignals(): Observable<ITradeSignal[]> {
        const userString = localStorage.getItem('user');
        let user: ILoggedInUser;
        if (userString === null) {
            user =  {
                userId: 'a16e2102-8af0-4b1c-ba03-e6785976091c',
                email: 'test@forex-miner.com',
                firstName: 'Elek',
                lastName: 'Test',
                hasConnections: true,
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiZW1haWxBZGRyZXNzIjoidGVzdEBmb3JleC1taW5lci5jb20iLCJmaXJzdE5hbWUiOiJFbGVrIiwibGFzdE5hbWUiOiJUZXN0IiwiaWF0IjoxNTE2MjM5MDIyfQ.ZgcWf_f_xStMtqpP870afnRIP4WqTytrO_PZGQ_FVDc'
            };
        } else {
            user = JSON.parse(userString) as ILoggedInUser;
        }

        if (user.hasConnections) {
            const tradeSignals: ITradeSignal[] = [
                {
                    time: new Date(),
                    instrument: 'EUR_USD',
                    direction: 'Long',
                    confidence: 1.0
                },
                {
                    time: new Date(2020, 9, 12),
                    instrument: 'EUR_USD',
                    direction: 'Long',
                    confidence: 0.15
                },
                {
                    time: new Date(2020, 9, 10),
                    instrument: 'EUR_USD',
                    direction: 'Short',
                    confidence: 0.95
                },
                {
                    time: new Date(2020, 8, 20),
                    instrument: 'EUR_USD',
                    direction: 'Long',
                    confidence: 0.5
                },
                {
                    time: new Date(2020, 7, 21),
                    instrument: 'EUR_USD',
                    direction: 'Short',
                    confidence: 0.76
                }
            ];
    
            return of(tradeSignals);   
        } else {
            return of([]);
        }
    }
}