import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { IChildren, IContactContext } from "../interfaces/contexts.interface";
import { ApiRequests } from "../services/ApiRequest";
import { ClientContext } from "./ClientContext";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IChildren) => {

  const [contact, setContact] = useState<IContact[] | null>(null);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [showDeleteContact, setShowDeleteContact] = useState(false);

  const createContact = async (data: IContact) => {
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
        showEditContact,
        setShowEditContact,
        showDeleteContact,
        setShowDeleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
