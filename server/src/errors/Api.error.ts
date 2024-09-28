export default class ApiError extends Error {
  status: number;
  constructor(httpCode: number, message?: string) {
    super(message);
    this.status = httpCode;
    this.name = "ApiError";
  }

  static badRequest(message?: string): ApiError {
    return new ApiError(400, message);
  }
  static internal(message?: string): ApiError {
    return new ApiError(500, message);
  }
}
