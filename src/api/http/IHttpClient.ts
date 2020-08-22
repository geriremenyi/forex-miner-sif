import { Observable } from 'rxjs';

export interface IHttpClient {
    get<T>(url: string): Observable<T>;
    post<T>(url: string, data: Record<string, unknown>): Observable<T>;
    patch<T>(url: string, data: Record<string, unknown>): Observable<T>;
    delete<T>(url: string): Observable<T>;
}