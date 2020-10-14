import { Observable, of, throwError } from 'rxjs';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';

import { IAuthentication, IAuthenticatedUser, IRegistration, IUser } from '~api/contracts/user';

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
    public login(auth: IAuthentication): Observable<IAuthenticatedUser> {
        if (auth.email === 'test@forex-miner.com' 
            && auth.password === 'TopSecretPass!4'
        ) {
            return of({
                userId: 'a16e2102-8af0-4b1c-ba03-e6785976091c',
                email: 'test@forex-miner.com',
                firstName: 'Elek',
                lastName: 'Test',
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
            });
        }
    }

}