import { Request, Response, NextFunction } from "express";
import { ZodTypeAny, ZodError } from "zod";

export const dataIsValidMiddleware =
  (serializer: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = serializer.parse(req.body);

      req.body = validatedData;

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      }
    }
  };
