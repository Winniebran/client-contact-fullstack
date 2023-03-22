import { IContactResponse, IContactUpdate } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppErrors";
import { contactResponseSerializer } from "../../serializers/contacts.serializer";

export const updateContactsService = async (
  id: string,
  contactsData: IContactUpdate
): Promise<IContactResponse> => {
  const contactsRepository = appDataSource.getRepository(Contacts);

  const foundContact = await contactsRepository.findOneBy({
    id: id,
  });

  if (!foundContact) {
    throw new AppError("Contact not found", 404);
  }

  const updatedContact = contactsRepository.create({
    ...foundContact,
    ...contactsData,
  });
  await contactsRepository.save(updatedContact);

  const updateContact = contactResponseSerializer.parse(updatedContact);

  return updateContact;
};
