import { useContext, useEffect } from "react";

import { ContactContext } from "../../contexts/ContactContext";
import { TypeContext } from "../../contexts/TypeContext";
import { Header } from "../../components/Header/Header";

import { AddContactModal } from "../../components/Modal/ModalContact/AddContactModal";
import { AddTypeModal } from "../../components/Modal/ModalType/AddTypeModal";

import { CgUserAdd } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Types } from "../../components/Main/Type/Types";
import { Contacts } from "../../components/Main/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { StyledMain } from "../../styles/main";
import { StyledSectionType } from "../../styles/section";
import { StyledButtonDashboard } from "../../styles/button";

export const DashboardPage = () => {
  const { showAddContact, setShowAddContact } = useContext(ContactContext);

  const { showAddType, listType } = useContext(TypeContext);

  useEffect(() => {
    listType();
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        <StyledSectionType>
          <div className="div-button-contact">
            <StyledButtonDashboard  onClick={() => setShowAddContact(true)}>
              <CgUserAdd /> Adicionar contato
            </StyledButtonDashboard>
            <StyledButtonDashboard>
              <HiOutlineDocumentReport /> Relatório
            </StyledButtonDashboard>
          </div>
          <Types />
        </StyledSectionType>

        <Contacts />
        {showAddContact && <AddContactModal />}
        {showAddType && <AddTypeModal />}
      </StyledMain>
      <Footer/>
    </>
  );
};
