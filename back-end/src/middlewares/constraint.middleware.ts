import { Request, Response, NextFunction } from "express";
import appDataSource from "../../src/data-source";
import { Client } from "../entities/client.entity";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/AppErrors";

export const constraintMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, cellPhone } = req.body;
  const clientRepository = appDataSource.getRepository(Client);
  const contactRepository = appDataSource.getRepository(Contacts);

  const emailExistsClient = await clientRepository.findOne({
    where: { email: email },
    withDeleted: true,
  });
  const emailExistsContact = await contactRepository.findOneBy({
    email: email,
  });

  const cellPhoneExistsClient = await clientRepository.findOne({
    where: { cellPhone: cellPhone },
    withDeleted: true,
  });
  const cellPhoneExistsContact = await contactRepository.findOneBy({
    cellPhone: cellPhone,
  });

  if (emailExistsClient || emailExistsContact) {
    throw new AppError("Email already registered", 409);
  }
  if (cellPhoneExistsClient || cellPhoneExistsContact) {
    throw new AppError("Cell phone already registered", 409);
  }

  return next();
};
