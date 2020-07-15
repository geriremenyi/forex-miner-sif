import { Observable } from 'rxjs';

export interface IHttpClient {
    get<T>(url: string): Observable<T>;
    post<T>(url: string, data: object): Observable<T>;
    patch<T>(url: string, data: object): Observable<T>;
    delete<T>(url: string): Observable<T>;
}