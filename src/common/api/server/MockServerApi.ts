import { throwError, Observable, of } from 'rxjs';

import { IAuthentication } from "~app/user/login/types";
import { IUser } from "~app/user/shared/types";

import { IServerApi } from ".";

export class MockServerApi implements IServerApi {

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
            return throwError(new Error("Invalid user"));
        }
    }

}