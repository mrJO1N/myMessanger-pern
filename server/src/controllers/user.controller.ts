import { Request, Response, NextFunction } from "express";
import RouteMiddleware from "../utils/abstract.route.middlevare";
import models from "../db/models";
import logger from "../utils/logger";
import ApiError from "../errors/Api.error";

export default class UserController extends RouteMiddleware {
  async getOne(req: Request, res: Response, next: NextFunction) {
    // await models.User.findOne({where:})
    next(ApiError.internal("not implemented"));
  }
  getMany(req: Request, res: Response, next: NextFunction): void {
    next(ApiError.internal("not implemented"));
  }
  post(req: Request, res: Response, next: NextFunction): void {
    next(ApiError.internal("not implemented"));
  }
  patch(req: Request, res: Response, next: NextFunction): void {
    next(ApiError.internal("not implemented"));
  }
  delete(req: Request, res: Response, next: NextFunction): void {
    next(ApiError.internal("not implemented"));
  }
}
