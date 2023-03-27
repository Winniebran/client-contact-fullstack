import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";
import {ICurrentContact } from "../../interfaces/contact.interface";
import { CiEdit } from "react-icons/ci";
import { CgUserRemove } from "react-icons/cg";

export const ContactCard = ({ contact }: any) => {
  const { setShowEditContact, setCurrentContact, deleteContact } =
    useContext(ContactContext);

  const editContact = (contact: ICurrentContact) => {
    setShowEditContact(true);
    setCurrentContact({ ...contact });
  };

  return (
    <li>
      <img src={contact.image} />
      <div>
        {contact.firstName}
        {contact.lastName}
        {contact.cellPhone}
        {contact.email}
      </div>
      <div>
        <button onClick={() => editContact(contact)}>
          <CiEdit />
        </button>
        <button>
          <CgUserRemove onClick={() => deleteContact(contact?.id)} />
        </button>
      </div>
    </li>
  );
};
