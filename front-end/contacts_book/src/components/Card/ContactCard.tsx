import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { CiTrash, CiEdit } from "react-icons/ci";
import { IContact, ICurrentContact } from "../../interfaces/contact.interface";

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
          <CiTrash onClick={() => deleteContact(contact?.id)} />
        </button>
      </div>
    </li>
  );
};
