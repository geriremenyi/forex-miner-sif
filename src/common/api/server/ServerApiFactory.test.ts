import { ApplicationEnvironment } from "~utilities/types";

import { ServerApi, ServerApiFactory, MockServerApi } from ".";

describe(ServerApiFactory.name, () => {
    describe(ServerApiFactory.getServerApi.name, () => {
        it('should create MockServerApi instance if development environment is passed', () => {
            // Arrange

    
            // Act
            const apiServer = ServerApiFactory.getServerApi(ApplicationEnvironment.Development);
    
            // Assert
            expect(apiServer).toBeInstanceOf(MockServerApi);
        });
    
        it('should create MockServerApi instance if test environment is passed', () => {
            // Arrange

            // Act
            const apiServer = ServerApiFactory.getServerApi(ApplicationEnvironment.Test);
    
            // Assert
            expect(apiServer).toBeInstanceOf(MockServerApi);
        });
    
        it('should create ServerApi instance if prodution environment is passed', () => {
            // Arrange
    
            // Act
            const apiServer = ServerApiFactory.getServerApi(ApplicationEnvironment.Production);
    
            // Assert
            expect(apiServer).toBeInstanceOf(ServerApi);
        });

        it('should create fallback to process.env.NODE_ENV and decide based on that if no value was provided', () => {
            // Arrange
            const environment = process.env.NODE_ENV as ApplicationEnvironment;
    
            // Act
            const apiServer = ServerApiFactory.getServerApi();
    
            // Assert
            if(environment === ApplicationEnvironment.Production) {
                expect(apiServer).toBeInstanceOf(ServerApi);
            } else {
                expect(apiServer).toBeInstanceOf(MockServerApi);
            }
        });
    });
});