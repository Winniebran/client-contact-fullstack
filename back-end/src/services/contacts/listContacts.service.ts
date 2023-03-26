import { IContactResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";

export const listContactsService = async (): Promise<IContactResponse[]> => {
  const contactsRepository = appDataSource.getRepository(Contacts);

  const contactsFound = await contactsRepository.find({
    relations: {
      type: true,
      client: true,
    },
    select: {
      client: {
        id: true,
        email: true,
        cellPhone: true,
      }
    }
  });

  return contactsFound;
};
