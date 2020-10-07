import { Observable } from 'rxjs';

export interface IHttpClient {
    get<T>(url: string): Observable<T>;
    post<T>(url: string, body: string): Observable<T>;
    patch<T>(url: string, body: string): Observable<T>;
    delete<T>(url: string): Observable<T>;
}