import { Observable } from 'rxjs';

import { IHttpClient } from "~api/http";
import { IAuthentication } from "~app/user/login/types";
import { IUser } from "~app/user/shared/types";

import { IServerApi } from ".";

export class ServerApi implements IServerApi {

    private readonly API_URL: string = '/api';

    private readonly API_VERSION: string = 'v1';

    private get API_FULL_URL(): string {
        return `${this.API_URL}/${this.API_VERSION}`;
    } 

    constructor(private httpClient: IHttpClient) {};

    public login(auth: IAuthentication): Observable<IUser> {
        throw new Error("Method not implemented.");
    }

}