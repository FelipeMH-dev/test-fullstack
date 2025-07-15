import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/ApiErrors";

export function errorHandler(
  err: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if ("statusCode" in err) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
