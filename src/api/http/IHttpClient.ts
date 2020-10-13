import { Observable } from 'rxjs';
import { IProblemDetails } from '~api/contracts/error/IProblemDetails';

export interface IHttpClient {
    get<R>(url: string): Observable<R>;
    post<B, R>(url: string, body: B): Observable<R>;
    patch<B, R>(url: string, body: B): Observable<R>;
    delete<R>(url: string): Observable<R>;
}