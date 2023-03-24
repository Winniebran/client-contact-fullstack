import { IContactResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { listContacts } from "../../serializers/contacts.serializer";

export const listContactsService = async (): Promise<IContactResponse[]> => {
  const contactsRepository = appDataSource.getRepository(Contacts);

  const contactsFound = await contactsRepository.find();
  const contacts = listContacts.parse(contactsFound);
  return contacts;
};
