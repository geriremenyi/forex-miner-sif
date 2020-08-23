export class ActionName {

    private readonly _actionName: string

    constructor(name: string) {
        this._actionName = `${name}`;
    }

    get START(): string {
        return `${this._actionName}/START`;
    }

    get SUCCESS(): string {
        return `${this._actionName}/SUCCESS`;
    }

    get ERROR(): string {
        return `${this._actionName}/ERROR`;
    }  

    get CANCEL(): string {
        return `${this._actionName}/CANCEL`;
    }
}