export declare abstract class Request {
    abstract readonly requestType: string;
    abstract requestId?: string;
}
export declare abstract class Response {
    abstract readonly responseType: string;
    abstract requestId?: string;
}
export interface ErrorDetails {
    [key: string]: unknown;
}
export declare class ErrorResponse implements Response {
    readonly responseType: string;
    requestId?: string;
    errorId?: string;
    errorDescription?: string;
    errorDetails?: ErrorDetails;
    constructor(requestId?: string, errorId?: string, errorDescription?: string, errorDetails?: ErrorDetails);
}
export declare function isRequestType<TRequest extends Request>(request: Request, expectedRequestType: {
    new (): TRequest;
}): request is TRequest;
export declare function isResponseType<TResponse extends Response>(response: Response, expectedRequestType: {
    new (): TResponse;
}): response is TResponse;
export declare class GetConnectedDevicesRequest implements Request {
    readonly requestType: string;
    readonly requestId?: string;
    constructor(requestId?: string);
}
export interface Device {
    deviceType: string;
    isHardwareToken: boolean;
    serialNumber: string;
    vendor: string;
}
export declare class GetConnectedDevicesResponse implements Response {
    readonly responseType: string;
    readonly requestId?: string;
    readonly devices?: Device[];
    constructor(requestId?: string, devices?: Device[]);
}
