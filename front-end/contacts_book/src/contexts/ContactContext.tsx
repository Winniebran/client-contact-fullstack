import { createContext, useState } from "react";
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

  const getContacts = async () => {
    const token = localStorage.getItem("@contactland:token");
    await ApiRequests.get<IContact[]>("/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      localStorage.setItem(
        "@contactland:contact",
        JSON.stringify(response.data)
      );
      setContact(response.data);
    });
  };

  const createContact = async (data: IContact) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      await ApiRequests.post("/contacts", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getContacts();

      toast.success("Contato criado com sucesso.");
      setShowAddContact(false);
    } catch (error) {
      console.log(error);
      toast.error("Esse contato já foi criado, é possível editá-lo.");
    }
  };

  const updateContact = async (data: IUpdateContact, id: string) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      await ApiRequests.patch(`/contacts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getContacts();

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
      getContacts();

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

  const contactsLocalStorage = JSON.parse(
    localStorage.getItem("@contactland:contact")!
  );

  const filterSearchContact = contactsLocalStorage?.filter(
    (contact: IContact) =>
      input === ""
        ? true
        : compareString(contact.email) ||
          compareString(contact.firstName) ||
          compareString(contact.lastName) ||
          compareString(contact.type.name) ||
          compareString(contact.cellPhone)
  );

  return (
    <ContactContext.Provider
      value={{
        contact,
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
        filterSearchContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
