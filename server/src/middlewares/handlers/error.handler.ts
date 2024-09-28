import { Request, Response, NextFunction } from "express";
import ApiError from "../../errors/Api.error";
import logger from "../../utils/logger";
export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.status).send(err.message);
  }

  res.status(500).send(err);
  logger.error(err);
}
