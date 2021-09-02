const TYPE_ERROR_RESPONSE = 'CLDB_ERROR_RESPONSE';
const TYPE_GET_CONNECTED_DEVICES_REQUEST = 'CLDB_GET_CONNECTED_DEVICES_REQUEST';
const TYPE_GET_CONNECTED_DEVICES_RESPONSE = 'CLDB_GET_CONNECTED_DEVICES_RESPONSE';
export class Request {
}
export class Response {
}
export class ErrorResponse {
    constructor(requestId, errorId, errorDescription, errorDetails) {
        this.responseType = TYPE_ERROR_RESPONSE;
        this.requestId = requestId;
        this.errorId = errorId;
        this.errorDescription = errorDescription;
        this.errorDetails = errorDetails;
    }
}
export function isRequestType(request, expectedRequestType) {
    return (request.requestType !== undefined &&
        request.requestType === new expectedRequestType().requestType);
}
export function isResponseType(response, expectedRequestType) {
    return (response.responseType !== undefined &&
        response.responseType === new expectedRequestType().responseType);
}
export class GetConnectedDevicesRequest {
    constructor(requestId) {
        this.requestType = TYPE_GET_CONNECTED_DEVICES_REQUEST;
        this.requestId = requestId;
    }
}
export class GetConnectedDevicesResponse {
    constructor(requestId, devices) {
        this.responseType = TYPE_GET_CONNECTED_DEVICES_RESPONSE;
        this.requestId = requestId;
        this.devices = devices;
    }
}
