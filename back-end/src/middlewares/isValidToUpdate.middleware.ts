import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppErrors";

export const isValidToUpdateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.isActive !== undefined || req.body.id !== undefined) {
    throw new AppError("Change not allowed", 401);
  }

  return next();
};
