import { IContactRequest, IContactResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { contactResponseSerializer } from "../../serializers/contacts.serializer";
import { Type } from "../../entities/type.entity";
import { AppError } from "../../errors/AppErrors";
import { Client } from "../../entities/client.entity";

export const createContactsService = async (
  contactsData: IContactRequest,
  clientId: string 
): Promise<IContactResponse> => {
  const clientRepository = appDataSource.getRepository(Client)
  const contactsRepository = appDataSource.getRepository(Contacts);
  const typeRepository = appDataSource.getRepository(Type)

  const contactAlreadyExists = await contactsRepository.findOne({
    relations: {
      type: true,
      client: true,
    },
    where: {
      email: contactsData.email,
      cellPhone: contactsData.cellPhone
    }
  })

  if (contactAlreadyExists) {
    throw new AppError("Contact already exists!", 409);
  }

  const typeFound = await typeRepository.findOneBy({ id: contactsData.type });

  if (!typeFound) {
    throw new AppError("Type not found!", 404);
  }

  const clientFound = await clientRepository.findOneBy({ id: clientId });

  if (!clientFound) {
    throw new AppError("Client not found!", 404);
  }

  const contacts = contactsRepository.create({
    ...contactsData,
    type: typeFound!,
    client: {
      id: clientFound.id,
      email: clientFound.email,
      cellPhone: clientFound.cellPhone
    }
  });
  await contactsRepository.save(contacts);

  return contacts;
};