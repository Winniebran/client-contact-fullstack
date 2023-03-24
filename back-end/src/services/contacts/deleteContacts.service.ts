import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppErrors";

export const deleteContactsService = async (id: string) => {
  const contactsRepository = appDataSource.getRepository(Contacts);

  const foundContacts = await contactsRepository.findOneBy({
    id: id,
  });
  if (!foundContacts) {
    throw new AppError("Contact not found", 404);
  }

  await contactsRepository.delete(id);
};
