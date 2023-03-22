import { IContactResponse, IContactUpdate } from "../../interfaces";

export const updateContactsService = async (
    id: string,
    contactsData: IContactUpdate
  ): Promise<IContactResponse => {};