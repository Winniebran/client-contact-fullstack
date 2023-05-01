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

  const emailExistsClient = await clientRepository
    .createQueryBuilder("client")
    .withDeleted()
    .where("client.email = :email", { email: email })
    .getOne();

  const emailExistsContact = await contactRepository
    .createQueryBuilder("contacts")
    .where("contacts.email = :email", { email: email })
    .getOne();

  const cellPhoneExistsClient = await clientRepository
    .createQueryBuilder("client")
    .withDeleted()
    .where("client.cellPhone = :cellPhone", { cellPhone: cellPhone })
    .getOne();

  const cellPhoneExistsContact = await contactRepository
    .createQueryBuilder("contacts")
    .where("contacts.cellPhone = :cellPhone", { cellPhone: cellPhone })
    .getOne();

  if (emailExistsClient || emailExistsContact) {
    throw new AppError("Email already registered", 409);
  }
  if (cellPhoneExistsClient || cellPhoneExistsContact) {
    throw new AppError("Cell phone already registered", 409);
  }

  return next();
};
