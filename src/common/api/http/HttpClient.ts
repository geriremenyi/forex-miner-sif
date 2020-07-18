import { Observable } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';

import { IHttpClient } from './IHttpClient';

export class HttpClient implements IHttpClient {

    private MAX_RETRY_COUNT = 10;
    private MIN_RETRY_BACKOFF = 500;

    get<T>(url: string): Observable<T> {
      throw new Error('Method not implemented.');
    }
    post<T>(url: string, data: object): Observable<T> {
      throw new Error('Method not implemented.');
    }
    patch<T>(url: string, data: object): Observable<T> {
      throw new Error('Method not implemented.');
    }
    delete<T>(url: string): Observable<T> {
      throw new Error('Method not implemented.');
    }

    private linearBackoffRetry(source: Observable<AjaxResponse>) {
      throw new Error('Method not implemented.');
    }

}