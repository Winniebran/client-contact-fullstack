import { IContactResponse, IContactUpdate } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppErrors";
import { contactResponseSerializer } from "../../serializers/contacts.serializer";
import { Type } from "../../entities/type.entity";
import { Client } from "../../entities/client.entity";

export const updateContactsService = async (
  id: string,
  contactsData: IContactUpdate,
  clientId: string
): Promise<IContactResponse> => {
  const contactsRepository = appDataSource.getRepository(Contacts);
  const typeRepository = appDataSource.getRepository(Type)
  const clientRepository = appDataSource.getRepository(Client)

  const foundContact = await contactsRepository.findOneBy({
    id: id,
  });

  if (!foundContact) {
    throw new AppError("Contact not found", 404);
  }

  const typeFound = await typeRepository.findOneBy({ id: contactsData.type });

  if (!typeFound) {
    throw new AppError("Type not found!", 404);
  }

  const clientFound = await clientRepository.findOneBy({ id: clientId });

  if (!clientFound) {
    throw new AppError("Client not found!", 404);
  }

  const updatedContact = contactsRepository.create({
    ...foundContact,
    ...contactsData,
    type: typeFound ? typeFound : foundContact.type,
    client: {
      id: clientFound.id,
      email: clientFound.email,
      cellPhone: clientFound.cellPhone
    }
  });
  await contactsRepository.save(updatedContact);

  // const updateContacts = contactResponseSerializer.parse(updatedContact);

  return updatedContact;
};
