import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { CiTrash, CiEdit } from "react-icons/ci";

export const ContactCard = ({ contact }: any) => {
  const { setShowEditContact, setCurrentContact } = useContext(ContactContext);

  const editContact = (contact: any) => {
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
          <CiTrash />
        </button>
      </div>
    </li>
  );
};
