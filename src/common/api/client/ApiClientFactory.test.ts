import { ApplicationEnvironment } from "~utilities/types";

import { HttpApiClient, MockApiClient, ApiClientFactory } from ".";

describe(ApiClientFactory.name, () => {
    describe('getServerApi', () => {
        it('should create MockServerApi instance if development environment is passed', () => {
            // Arrange
    
            // Act
            const apiServer = ApiClientFactory.getServerApi(ApplicationEnvironment.Development);
    
            // Assert
            expect(apiServer).toBeInstanceOf(MockApiClient);
        });
    
        it('should create MockServerApi instance if test environment is passed', () => {
            // Arrange

            // Act
            const apiServer = ApiClientFactory.getServerApi(ApplicationEnvironment.Test);
    
            // Assert
            expect(apiServer).toBeInstanceOf(MockApiClient);
        });
    
        it('should create ServerApi instance if prodution environment is passed', () => {
            // Arrange
    
            // Act
            const apiServer = ApiClientFactory.getServerApi(ApplicationEnvironment.Production);
    
            // Assert
            expect(apiServer).toBeInstanceOf(HttpApiClient);
        });

        it('should create fallback to process.env.NODE_ENV and decide based on that if no value was provided', () => {
            // Arrange
            const environment = process.env.NODE_ENV as ApplicationEnvironment;
    
            // Act
            const apiServer = ApiClientFactory.getServerApi();
    
            // Assert
            if(environment === ApplicationEnvironment.Production) {
                expect(apiServer).toBeInstanceOf(HttpApiClient);
            } else {
                expect(apiServer).toBeInstanceOf(MockApiClient);
            }
        });
    });
});