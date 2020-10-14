import { Observable, pipe, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError} from 'rxjs/operators';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';
import { IAuthenticatedUser } from '~api/contracts/user';

import { IHttpClient } from './IHttpClient';

export class HttpClient implements IHttpClient {
    
    public get<R>(url: string): Observable<R> {
        return ajax({
            url: url,
            method: 'GET',
            headers: this.getHeaders()
        }).pipe(
            map(resp => resp.response as R),
            catchError(error => throwError(error.response as IProblemDetails))
        );
    }

    public post<B, R>(url: string, body: B): Observable<R> {
        return ajax({
            url: url,
            method: 'POST',
            headers: this.getHeaders(),
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
            headers: this.getHeaders(),
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
            headers: this.getHeaders()
        }).pipe(
            map(resp => resp.response as R),
            catchError(error => throwError(error.response as IProblemDetails))
        );
    }

    private withExponentialBackoffRetryStrategy(maxRetry: number = 5, minBackoffMs: number = 500, backoffScale: number = 0.1) {
       return pipe(
           //map(response => response.response)
       );
    }

    private getHeaders(): Object {
        const user = localStorage.getItem('user');
        
        return {
            'Content-Type': 'application/json',
            'Authorization': user ? (JSON.parse(user) as IAuthenticatedUser).token : null
        }; 
    }
}