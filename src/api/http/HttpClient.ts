import { Observable, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, } from 'rxjs/operators';

import { IHttpClient } from './IHttpClient';

export class HttpClient implements IHttpClient {
    
    public get<T>(url: string): Observable<T> {
        return ajax({
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            }
        }).pipe(map(resp => resp.response as T));
    }

    public post<T>(url: string, body: string): Observable<T> {
        return ajax({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            },
            body: body
        }).pipe(map(resp => resp.response as T));
    }

    public patch<T>(url: string, body: string): Observable<T> {
        return ajax({
            url: url,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            },
            body: body
        }).pipe(map(resp => resp.response as T));
    }

    public delete<T>(url: string): Observable<T> {
        return ajax({
            url: url,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TODO'
            }
        }).pipe(map(resp => resp.response as T));
    }

    public withExponentialBackoffRetryStrategy(maxRetry: number = 5, minBackoffMs: number = 500, backoffScale: number = 0.1) {
       return pipe(
           //map(response => response.response)
       );
    }
}