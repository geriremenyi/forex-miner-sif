import { Observable, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError} from 'rxjs/operators';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';
import { ILoggedInUser } from '~api/contracts/user';

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

    private getHeaders(): Record<string, string | null> {
        const user = localStorage.getItem('user');
        
        return {
            'Content-Type': 'application/json',
            'Authorization': user ? (JSON.parse(user) as ILoggedInUser).token : null
        }; 
    }
}