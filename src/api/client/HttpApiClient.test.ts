import { mock } from 'jest-mock-extended';

import { HttpApiClient, IApiClient } from '.';
import { IHttpClient } from 'src/api/http';

describe(HttpApiClient.name, () => {

    let httpClient: IHttpClient;
    let httpApiClient: IApiClient;

    beforeEach(() => {
        httpClient = mock<IHttpClient>();
        httpApiClient = new HttpApiClient(httpClient);
    });

    describe('login', () => {
        it('should return user details on successful login', () => {
            // Arrange

            // Act

            // Assert
            // TODO
            expect(httpApiClient.login).toThrowError();
        });
    });
});