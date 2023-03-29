import { useContext } from "react";
import { ContactContext } from "../../../contexts/ContactContext";

import NoCard from "../../../@types/assets/NoCard.svg";
import { ContactCard } from "../../Card/ContactCard";
import { EditContactModal } from "../../Modal/ModalContact/EditContactModal";
import { StyledSectionContact } from "../../../styles/section";
export const Contacts = () => {
  const { showEditContact, filterSearchContact } = useContext(ContactContext);

  return (
    <StyledSectionContact>
      <h3>Meus Contatos:</h3>
      {!filterSearchContact?.length ? (
        <div>
          <p> Ainda não possui nenhum contato cadastrado!</p>
          <img src={NoCard} alt="Sem contato" />
        </div>
      ) : (
        <ul>
          {filterSearchContact?.map((contact) => (
            <ContactCard contact={contact} key={contact?.id} />
          ))}
          {showEditContact && <EditContactModal />}
        </ul>
      )}
    </StyledSectionContact>
  );
};
