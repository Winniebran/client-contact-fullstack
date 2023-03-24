import { Request, Response, NextFunction } from "express";
import appDataSource from "../data-source";
import { Type } from "../entities/type.entity";
import { AppError } from "../errors/AppErrors";

export const isTypeExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const typesRepository = appDataSource.getRepository(Type);

  const typeExists = await typesRepository.findOneBy({ name: name });
  if (typeExists) {
    throw new AppError("Type already Exists", 409);
  }

  return next();
};
