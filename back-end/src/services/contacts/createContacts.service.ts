import { IContactRequest, IContactResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { contactResponseSerializer } from "../../serializers/contacts.serializer";

export const createContactsService = async (
  contactsData: IContactRequest
): Promise<IContactResponse> => {
  const contactsRepository = appDataSource.getRepository(Contacts);

  const contacts = contactsRepository.create(contactsData);
  await contactsRepository.save(contacts);
  const contactsResponse = contactResponseSerializer.parse(contacts);

  return contactsResponse;
};
