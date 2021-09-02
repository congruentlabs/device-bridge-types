const TYPE_ERROR_RESPONSE = 'CLDB_ERROR_RESPONSE';

const TYPE_GET_CONNECTED_DEVICES_REQUEST = 'CLDB_GET_CONNECTED_DEVICES_REQUEST';
const TYPE_GET_CONNECTED_DEVICES_RESPONSE = 'CLDB_GET_CONNECTED_DEVICES_RESPONSE';

export abstract class Request {
  abstract readonly requestType: string;
  abstract requestId?: string;
}

export abstract class Response {
  abstract readonly responseType: string;
  abstract requestId?: string;
}

export interface ErrorDetails {
  [key: string]: unknown;
}

export class ErrorResponse implements Response {
  readonly responseType: string = TYPE_ERROR_RESPONSE;
  requestId?: string;
  errorId?: string;
  errorDescription?: string;
  errorDetails?: ErrorDetails;

  constructor(
    requestId?: string,
    errorId?: string,
    errorDescription?: string,
    errorDetails?: ErrorDetails
  ) {
    this.requestId = requestId;
    this.errorId = errorId;
    this.errorDescription = errorDescription;
    this.errorDetails = errorDetails;
  }
}

export function isRequestType<TRequest extends Request>(
  request: Request,
  expectedRequestType: { new (): TRequest }
): request is TRequest {
  return (
    request.requestType !== undefined &&
    request.requestType === new expectedRequestType().requestType
  );
}

export function isResponseType<TResponse extends Response>(
  response: Response,
  expectedRequestType: { new (): TResponse }
): response is TResponse {
  return (
    response.responseType !== undefined &&
    response.responseType === new expectedRequestType().responseType
  );
}

export class GetConnectedDevicesRequest implements Request {
  readonly requestType: string = TYPE_GET_CONNECTED_DEVICES_REQUEST;
  readonly requestId?: string;

  constructor(requestId?: string) {
    this.requestId = requestId;
  }
}

export interface Device {
  deviceType: string;
  isHardwareToken: boolean;
  serialNumber: string;
  vendor: string;
}

export class GetConnectedDevicesResponse implements Response {
  readonly responseType: string = TYPE_GET_CONNECTED_DEVICES_RESPONSE;
  readonly requestId?: string;
  readonly devices?: Device[];

  constructor(requestId?: string, devices?: Device[]) {
    this.requestId = requestId;
    this.devices = devices;
  }
}
