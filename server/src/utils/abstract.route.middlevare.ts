import { Request, Response, NextFunction } from "express";

export default abstract class RouteMiddleware {
  abstract getOne(req: Request, res: Response, next: NextFunction): void;
  abstract getMany(req: Request, res: Response, next: NextFunction): void;
  abstract post(req: Request, res: Response, next: NextFunction): void;
  abstract patch(req: Request, res: Response, next: NextFunction): void;
  abstract delete(req: Request, res: Response, next: NextFunction): void;
}
