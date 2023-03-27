import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import {
  IContact,
  ICurrentContact,
  IUpdateContact,
} from "../interfaces/contact.interface";
import { IChildren, IContactContext } from "../interfaces/contexts.interface";
import { ApiRequests } from "../services/ApiRequest";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IChildren) => {
  const [contact, setContact] = useState<IContact[] | null>(null);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [showDeleteContact, setShowDeleteContact] = useState(false);
  const [currentContact, setCurrentContact] = useState<ICurrentContact | null>(
    null
  );

  const createContact = async (data: IContact) => {
    try {
      const response = await ApiRequests.post("/contacts", data);
      toast.success("Contato criado com sucesso.");
      setShowAddContact(false);
      if (contact) {
        setContact([...contact, response.data]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse contato já foi criado, é possível editá-lo.");
    }
  };

  const updateContact = async (data: IUpdateContact, id: string) => {
    try {
      await ApiRequests.patch(`/contacts/${id}`, data);
      toast.success("Contato editado com sucesso.");
      setShowEditContact(false);
      if (contact) {
        const newContact = contact.map((contact: IContact) => {
          if (contact.id === id) {
            return { ...contact, ...data };
          } else {
            return contact;
          }
        });
        setContact({ ...contact, ...newContact });
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse contato não pôde ser editado.");
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await ApiRequests.delete(`/contacts/${id}`);
      toast.success("Contato excluído com sucesso.");
      if (contact) {
        const newContact = contact.filter(
          (contact: IContact) => contact.id !== id
        );
        setContact({ ...contact, ...newContact });
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse contato não pôde ser excluído.");
    }
  };

  useEffect(() => {
    const listContact = async () => {
      try {
        const response = await ApiRequests.get("/contacts");

        setContact([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    listContact();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact,
        createContact,
        updateContact,
        deleteContact,
        showAddContact,
        setShowAddContact,
        showEditContact,
        setShowEditContact,
        showDeleteContact,
        setShowDeleteContact,
        currentContact,
        setCurrentContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
