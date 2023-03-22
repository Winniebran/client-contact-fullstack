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

  const [foundContacts] = await contactsRepository.find({
    where: { id: id },
  });

  if (!foundContacts) {
    throw new AppError("Contacts not found", 404);
  }

  const updatedContacts = contactsRepository.create({
    ...foundContacts,
    ...contactsData,
  });
  await contactsRepository.save(updatedContacts);

  const updateContacts = contactResponseSerializer.parse(updatedContacts);

  return updateContacts;
};
