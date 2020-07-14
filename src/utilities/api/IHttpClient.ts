export interface IHttpClient {
    get(endpoint: string): Promise<Response>;
    post(endpoint: string, data: object): Promise<Response>;
    patch(endpoint: string, data: object): Promise<Response>;
    delete(endpoint: string): Promise<Response>;
}