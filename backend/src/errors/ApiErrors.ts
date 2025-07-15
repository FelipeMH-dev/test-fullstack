// src/errors/CustomErrors.ts

export class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}

export class BadRequestError extends HttpError {
  constructor(message = "Invalid request") {
    super(message, 400);
  }
}

export class Forbidden extends HttpError {
  constructor(message = "Forbidden: Invalid headers") {
    super(message, 403);
  }
}
