import { Request, Response, NextFunction } from "express";
import { Forbidden } from "../errors/ApiErrors";
export const verifyHeaders = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.headers["x-api-key"];
  const customHeader = req.headers["x-custom-header"];

  if (
    apiKey !== process.env.API_KEY ||
    customHeader !== process.env.CUSTOM_HEADER
  ) {
    throw new Forbidden();
  }

  next();
};
