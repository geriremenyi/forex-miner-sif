import { HttpClient } from '~api/http';
import { ApplicationEnvironment } from '~utilities/types';

import { IApiClient, MockApiClient, HttpApiClient } from '.';

/**
 * An {@link IApiClient} factory responsible to provide a correct {@link IApiClient} instance based on the environment.
 */
export abstract class ApiClientFactory {

  /**
     * Get an {@link IApiClient} instance based on the passed target environment if given.
     * If no environment is passed the process.env.NODE_ENV used instead.
     * 
     * @param targetEnvironment The environment you want to receive a {@link IApiClient} instance for.
     * @returns An {@link IApiClient} instance
     */
  public static getServerApi(targetEnvironment?: ApplicationEnvironment): IApiClient {
    const environment = targetEnvironment ?? (process.env.NODE_ENV as ApplicationEnvironment);
        
    switch (environment) {
    case ApplicationEnvironment.Production:
      return new HttpApiClient(new HttpClient());
    case ApplicationEnvironment.Development:
    case ApplicationEnvironment.Test:
    default:
      return new MockApiClient();
    }
  }

}