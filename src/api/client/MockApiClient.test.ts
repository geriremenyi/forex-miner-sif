import { IAuthentication } from '~api/contracts/user';

import { IApiClient, MockApiClient } from '.';

describe(MockApiClient.name, () => {

    let mockApiClient: IApiClient;

    beforeEach(() => {
        mockApiClient = new MockApiClient();
    });

    describe('login', () => {
        it('should successfully login with the hardcoded username and password', (done) => {
            // Arrange
            const auth: IAuthentication = {
                email: 'test@forex-miner.com',
                password: 'TopSecretPass!4'
            };

            // Act
            const loginObservable = mockApiClient.login(auth);

            // Assert
            loginObservable.subscribe(
                user => {
                    expect(user.userId).toBe('a16e2102-8af0-4b1c-ba03-e6785976091c');
                    expect(user.email).toBe('test@forex-miner.com');
                    expect(user.firstName).toBe('Elek');
                    expect(user.lastName).toBe('Test');
                    expect(user.token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiZW1haWxBZGRyZXNzIjoidGVzdEBmb3JleC1taW5lci5jb20iLCJmaXJzdE5hbWUiOiJFbGVrIiwibGFzdE5hbWUiOiJUZXN0IiwiaWF0IjoxNTE2MjM5MDIyfQ.ZgcWf_f_xStMtqpP870afnRIP4WqTytrO_PZGQ_FVDc');
                    done();
                },
                error => fail(`The successful login shouldn't reach the observable's error branch. Error: ${error}`)
            );
        });

        it('should fail to login with any other credentials', (done) => {
            // Arrange
            const auth: IAuthentication = {
                email: 'invalid-test@forex-miner.com',
                password: 'IHaveNoIdea!4'
            };

            // Act
            const loginObservable = mockApiClient.login(auth);

            // Assert
            loginObservable.subscribe(
                user => fail(`The login should fail, however got a user: ${user}`),
                error => {
                    expect(error).toBeInstanceOf(Error);
                    done();
                }
            );
        });
    });

});