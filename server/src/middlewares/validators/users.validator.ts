import { Request, Response, NextFunction } from "express";
import RouteMiddleware from "../../utils/abstract.route.middlevare";
import ApiError from "../../errors/Api.error";
import Joi from "joi";

export default class UserValidator extends RouteMiddleware {
  getOne(req: Request, res: Response, next: NextFunction): void {
    next();
  }
  getMany(req: Request, res: Response, next: NextFunction): void {
    next();
  }
  post(req: IPostReq, res: Response, next: NextFunction) {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      next(
        ApiError.badRequest(
          "missing required fields: email, password, username"
        )
      );
    }

    const schema = Joi.object({
      email: Joi.string().email({ tlds: false }),
      username: Joi.string().min(3).max(20),
      password: Joi.string().min(8).max(20),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      next(ApiError.badRequest(error.details[0].message));
    }

    next();
  }
  patch(req: Request, res: Response, next: NextFunction): void {
    next();
  }
  delete(req: Request, res: Response, next: NextFunction): void {
    next();
  }
}

interface IPostReq extends Request {
  body: {
    email: string;
    password: string;
    username: string;
  };
}
