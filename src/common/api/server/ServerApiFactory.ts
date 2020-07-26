import { HttpClient } from '~api/http';
import { ApplicationEnvironment } from "~utilities/types";

import { MockServerApi, ServerApi } from ".";

export abstract class ServerApiFactory {

    public static getServerApi(targetEnvironment?: ApplicationEnvironment) {
        const environment = targetEnvironment ?? (process.env.NODE_ENV as ApplicationEnvironment);
        switch (environment) {
            case ApplicationEnvironment.Production:
                return new ServerApi(new HttpClient());
            case ApplicationEnvironment.Development:
            case ApplicationEnvironment.Test:
            default:
                return new MockServerApi();
        }
    }

}