import { Observable } from 'rxjs';

import { IUser } from "~app/user/shared/types";
import { IAuthentication } from "~app/user/login/types";

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
    login(auth: IAuthentication): Observable<IUser>;
}