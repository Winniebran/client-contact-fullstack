import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const dataIsValidMiddleware =
  (serializer: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = serializer.parse(req.body);

    req.body = validatedData;

    return next();
  };
