import { IContactRequest, IContactResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { contactResponseSerializer } from "../../serializers/contacts.serializer";
import { AppError } from "../../errors/AppErrors";

export const createContactsService = async (
  contactsData: IContactRequest
): Promise<IContactResponse> => {
  const { email } = contactsData;
  const contactsRepository = appDataSource.getRepository(Contacts);

  const emailExists = await contactsRepository.findOneBy({ email: email });

  if (!emailExists) {
    const contacts = contactsRepository.create(contactsData);
    await contactsRepository.save(contacts);
    const contactsResponse = contactResponseSerializer.parse(contacts);

    return contactsResponse;
  }

  throw new AppError("Email already exists", 409);
};
