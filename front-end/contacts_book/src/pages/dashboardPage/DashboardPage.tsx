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

export const DashboardPage = () => {
  const { showAddContact, setShowAddContact } = useContext(ContactContext);

  const { showAddType, listType } = useContext(TypeContext);

  useEffect(() => {
    listType();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <button onClick={() => setShowAddContact(true)}>
              <CgUserAdd /> Adicionar contato
            </button>
            <button>
              <HiOutlineDocumentReport /> Relatório
            </button>
          </div>
          <Types />
        </section>

        <Contacts />
        {showAddContact && <AddContactModal />}
        {showAddType && <AddTypeModal />}
      </main>
      <Footer/>
    </>
  );
};
