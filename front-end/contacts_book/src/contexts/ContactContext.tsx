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
  const [input, setInput] = useState<string>("");
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [currentContact, setCurrentContact] = useState<ICurrentContact | null>(
    null
  );

  const createContact = async (data: IContact) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const response = await ApiRequests.post("/contacts", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      contact && setContact([...contact, response.data]);

      toast.success("Contato criado com sucesso.");
      setShowAddContact(false);
    } catch (error) {
      console.log(error);
      toast.error("Esse contato já foi criado, é possível editá-lo.");
    }
  };

  const listContact = async () => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const { data } = await ApiRequests.get("/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContact([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (data: IUpdateContact, id: string) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      await ApiRequests.patch(`/contacts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newContact = contact?.map((contact: IContact) => {
        if (contact.id === id) {
          return { ...contact, ...data };
        } else {
          return contact;
        }
      });
      contact && setContact({ ...contact, ...newContact });

      toast.success("Contato editado com sucesso.");
      setShowEditContact(false);
    } catch (error) {
      console.log(error);
      toast.error("Esse contato não pôde ser editado.");
    }
  };

  const deleteContact = async (id: string) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      await ApiRequests.delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newContact = contact?.filter(
        (contact: IContact) => contact.id !== id
      );
      contact && setContact({ ...contact, ...newContact });

      toast.success("Contato excluído com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Esse contato não pôde ser excluído.");
    }
  };

  const compareString = (string: string) => {
    return string
      .toLowerCase()
      .normalize("NFD")
      .replace(/[^a-zA-Z\s]/g, "")
      .includes(
        input
          .toLowerCase()
          .normalize("NFD")
          .replace(/[^a-zA-Z\s]/g, "")
          .trim()
      );
  };

  const filterSearchContact = contact?.filter((contact: IContact) =>
    input === ""
      ? true
      : compareString(contact.email) ||
        compareString(contact.firstName) ||
        compareString(contact.lastName) ||
        compareString(contact.cellPhone)
  );

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
        currentContact,
        setCurrentContact,
        input,
        setInput,
        listContact,
        filterSearchContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
