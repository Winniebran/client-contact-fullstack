import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";
import NoImg from "../../@types/assets/NoImg.jpg";
import { ICurrentContact } from "../../interfaces/contact.interface";
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
      {contact?.image == "" ? (
        <img src={NoImg} alt="imagem de perfil" />
      ) : (
        <img src={contact.image} alt="imagem de perfil" />
      )}
      <div className="div-contact-card">
        <div className="div-personal-data">
          <span>{`${contact.firstName} ${contact.lastName} `}</span>
          <span>{contact.cellPhone}</span>
        </div>
        <div className="div-personal-data">
          <span>{contact.email}</span>
          <span className="type-name">{contact.type.name}</span>
        </div>
      </div>
      <div className="button-li-contact">
        <button onClick={() => editContact(contact)}>
          <CiEdit />
        </button>
        <button onClick={() => deleteContact(contact?.id)}>
          <CgUserRemove />
        </button>
      </div>
    </li>
  );
};
