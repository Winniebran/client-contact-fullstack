import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "../errors/AppErrors";

export const idIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const uuid = z.string().uuid();
    uuid.parse(req.params.id);

    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new AppError("Id is not valid", 404);
    }
  }
};
