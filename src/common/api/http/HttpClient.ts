import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { retryWhen } from "rxjs/operators";

import { ForexMinerException } from "~utilities/errors";

import { IHttpClient } from "./IHttpClient";

export class HttpClient implements IHttpClient {

    private MAX_RETRY_COUNT: number = 10;
    private MIN_RETRY_BACKOFF: number = 500;

    get<T>(url: string): Observable<T> {
        throw new Error("Method not implemented.");
    }
    post<T>(url: string, data: object): Observable<T> {
        throw new Error("Method not implemented.");
    }
    patch<T>(url: string, data: object): Observable<T> {
        throw new Error("Method not implemented.");
    }
    delete<T>(url: string): Observable<T> {
        throw new Error("Method not implemented.");
    }

    private linearBackoffRetry(source: Observable<AjaxResponse>) {
        throw new Error("Method not implemented.");
    }

}