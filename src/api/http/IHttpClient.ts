import { Observable } from 'rxjs';

/**
 * Interface for HttpClient.
 * 
 * Exposes the available HTTP methods implemented 
 * either by the mock server or the actual client.
 */
export interface IHttpClient {
    /**
     * HTTP GET method.
     * 
     * @param url The url to send the GET request to.
     */
    get<R>(url: string): Observable<R>;

    /**
     * HTTP POST method.
     * 
     * @param url The url to send the POST request to.
     * @param body The content of the request.
     */
    post<B, R>(url: string, body: B): Observable<R>;

    /**
     * HTTP PATCH method.
     * 
     * @param url The url to send the PATCH request to.
     * @param body The content of the request.
     */
    patch<B, R>(url: string, body: B): Observable<R>;

    /**
     * HTTP DELETE method.
     * 
     * @param url The url to send the DELETE request to.
     */
    delete<R>(url: string): Observable<R>;
}