import { IHttpClient } from "./IHttpClient";
import { ForexMinerException } from "~utilities/errors";

export class HttpClient implements IHttpClient {

    private MAX_RETRY_COUNT: number = 10;
    private MIN_RETRY_BACKOFF: number = 500;

    public get(url: string): Promise<Response> {
        return this.withLinearBackoffRetry(() => fetch(url, {
            method: 'GET'
        }));
    }

    public post(url: string, data: object): Promise<Response> {
        return this.withLinearBackoffRetry(() => fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        }));
    }

    public patch(url: string, data: object): Promise<Response> {
        return this.withLinearBackoffRetry(() => fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data)
        }));
    }

    public delete(url: string): Promise<Response> {
        return this.withLinearBackoffRetry(() => fetch(url, {
            method: 'DELETE'
        }));
    }

    private async withLinearBackoffRetry(fetchCall: () => Promise<Response>): Promise<Response> {
        let retries = 0;
        let exceptionMessage: any;

        while(retries <= this.MAX_RETRY_COUNT) {
            try {
                return await fetchCall();
            } catch (error) {
                // Only non-textual 4xx and 5xx will end up here
                // Detailed client-side or server side errors
                // won't be retried only unknown (transient) ones
                exceptionMessage = error;
                retries++;
                this.delay(this.MIN_RETRY_BACKOFF * retries);
            }
        }

        throw new ForexMinerException(exceptionMessage);
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}