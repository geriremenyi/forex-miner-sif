import { Observable, of, throwError } from 'rxjs';

import { IAuthentication, IUser } from '~api/models/user';

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
    public login(auth: IAuthentication): Observable<IUser> {
        if (auth.emailAddress == 'test@forex-miner.com' 
            && auth.password == 'TopSecretPass!4'
        ) {
            return of({
                userId: 'a16e2102-8af0-4b1c-ba03-e6785976091c',
                emailAddress: 'test@forex-miner.com',
                firstName: 'Elek',
                lastName: 'Test',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiZW1haWxBZGRyZXNzIjoidGVzdEBmb3JleC1taW5lci5jb20iLCJmaXJzdE5hbWUiOiJFbGVrIiwibGFzdE5hbWUiOiJUZXN0IiwiaWF0IjoxNTE2MjM5MDIyfQ.ZgcWf_f_xStMtqpP870afnRIP4WqTytrO_PZGQ_FVDc'
            });
        } else {
            // TODO replace with error details object
            return throwError(new Error('404'));
        }
    }

}