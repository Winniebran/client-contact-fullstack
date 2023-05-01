import { useContext } from "react";
import { ContactContext } from "../../../contexts/ContactContext";

import NoCard from "../../../@types/assets/NoCard.svg";
import { ContactCard } from "../../Card/ContactCard";
import { EditContactModal } from "../../Modal/ModalContact/EditContactModal";
import { StyledSectionContact } from "../../../styles/section";
import { StyledTitle } from "../../../styles/typography";
import { StyledListContact } from "../../../styles/list";
export const Contacts = () => {
  const { showEditContact, filterSearchContact } = useContext(ContactContext);

  return (
    <StyledSectionContact>
      <StyledTitle tag="h3" fontFamily="one" fontSize="seven">Meus Contatos</StyledTitle>
      {!filterSearchContact?.length ? (
        <div>
          <StyledTitle tag="p" fontSize="seven" fontFamily="one"> Ainda não possui nenhum contato cadastrado!</StyledTitle>
          <img src={NoCard} alt="Sem contato" />
        </div>
      ) : (
        <StyledListContact>
          {filterSearchContact?.map((contact) => (
            <ContactCard contact={contact} key={contact?.id} />
          ))}
          {showEditContact && <EditContactModal />}
        </StyledListContact>
      )}
    </StyledSectionContact>
  );
};
