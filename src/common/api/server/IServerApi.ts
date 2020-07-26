import { Observable } from 'rxjs';

import { IUser } from "~app/user/shared/types";
import { IAuthentication } from "~app/user/login/types";

export interface IServerApi {
    login(auth: IAuthentication): Observable<IUser>;
}