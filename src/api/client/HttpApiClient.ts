import { Observable } from 'rxjs';

import { IHttpClient } from '~api/http';
import { IAuthentication, IAuthenticatedUser, IRegistration, IUser } from '~api/contracts/user';

import { IApiClient } from '.';

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
    public login(auth: IAuthentication): Observable<IAuthenticatedUser> {
        return this.httpClient.post<IAuthentication, IAuthenticatedUser>(
            `${this.getEndpoint('users/authenticate')}`,
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
     * Full API URL property.
     * Getting the root URL via concatenating the base url and API version
     */
    private getEndpoint(endpoint: string): string {
        return `${this.API_URL}/${this.API_VERSION}/${endpoint}`;
    }
}