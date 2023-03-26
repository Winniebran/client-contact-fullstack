import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { IChildren, IContactContext } from "../interfaces/contexts.interface";
import { ApiRequests } from "../services/ApiRequest";
import { ClientContext } from "./ClientContext";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IChildren) => {
  const { client, setClient } = useContext(ClientContext);

  const [contact, setContact] = useState<IContact[] | null>(null);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditAndDeleteContact, setShowEditAndDeleteContact] =
    useState(false);

  const createContact = async (data: ICreateContact) => {
    try {
      const response = await ApiRequests.post("/contacts", data);
      toast.success("Contato criado com sucesso.");
      setShowAddContact(false);
      if (contact) {
        setContact(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse contato já foi criado, é possível editá-lo.");
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact,
        createContact,
        showAddContact,
        setShowAddContact,
        showEditAndDeleteContact,
        setShowEditAndDeleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
