import { Observable, pipe, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError} from 'rxjs/operators';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';

import { IHttpClient } from './IHttpClient';

export class HttpClient implements IHttpClient {
    
    public get<R>(url: string): Observable<R> {
        return ajax({
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            }
        }).pipe(
            map(resp => resp.response as R),
            catchError(error => throwError(error.response as IProblemDetails))
        );
    }

    public post<B, R>(url: string, body: B): Observable<R> {
        return ajax({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            },
            body: JSON.stringify(body)
        }).pipe(
            map(resp => resp.response as R),
            catchError(error => throwError(error.response as IProblemDetails))
        );
    }

    public patch<B, R>(url: string, body: B): Observable<R> {
        return ajax({
            url: url,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            },
            body: JSON.stringify(body)
        }).pipe(
            map(resp => resp.response as R),
            catchError(error => throwError(error.response as IProblemDetails))
        );
    }

    public delete<R>(url: string): Observable<R> {
        return ajax({
            url: url,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            }
        }).pipe(
            map(resp => resp.response as R),
            catchError(error => throwError(error.response as IProblemDetails))
        );
    }

    public withExponentialBackoffRetryStrategy(maxRetry: number = 5, minBackoffMs: number = 500, backoffScale: number = 0.1) {
       return pipe(
           //map(response => response.response)
       );
    }
}