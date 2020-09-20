/**
 * Wrapper class for async action names
 */
export class AsyncActionName {

    /**
     * Namespace of the action
     */
    private readonly _actionNamespace: string;

    /**
     * Name of the action
     */
    private readonly _actionName: string;

    /**
     * Async action name object initializer
     * 
     * @param namespace Namespace of the action name object 
     * @param name Name of the action name object
     */
    constructor(namespace: string, name: string) {
        this._actionNamespace = `${namespace}`;
        this._actionName = `${name}`;
    }

    /**
     * Represents the async action's name when the async action fired
     * 
     * @returns Name of the async action when async action started
     */
    get START(): string {
        return `${this._actionNamespace}/${this._actionName}/START`;
    }

    /**
     * Represents the async action's name when the async action sucessfully executed
     * 
     * @returns Name of the async action when async action finished successfuly
     */
    get SUCCESS(): string {
        return `${this._actionNamespace}/${this._actionName}/SUCCESS`;
    }

    /**
     * Represents the async action's name when the async action execution ended with and error
     * 
     * @returns Name of the async action when async action failed
     */
    get ERROR(): string {
        return `${this._actionNamespace}/${this._actionName}/ERROR`;
    }  

    /**
     * Represents the async action's name when the async action canceled
     * 
     * @returns Name of the async action when async action canceled
     */
    get CANCEL(): string {
        return `${this._actionNamespace}/${this._actionName}/CANCEL`;
    }
}
