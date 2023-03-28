import { useContext, useEffect } from "react";

import { ContactContext, ContactProvider } from "../../contexts/ContactContext";
import { TypeContext, TypeProvider } from "../../contexts/TypeContext";
import { ContactCard } from "../../components/Card/ContactCard";
import { TypeCard } from "../../components/Card/TypeCard";
import { Header } from "../../components/Header/header";
import { AddContactModal } from "../../components/Modal/ModalContact/AddContactModal";
import { AddTypeModal } from "../../components/Modal/ModalType/AddTypeModal";
import { EditContactModal } from "../../components/Modal/ModalContact/EditContactModal";
import { EditTypeModal } from "../../components/Modal/ModalType/EditTypeModal";

import NoCard from "../../assets/NoCard.svg";
import { CgUserAdd, CgUserList } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";

export const DashboardPage = () => {
  const {
    showAddContact,
    setShowAddContact,
    showEditContact,
    filterSearchContact,
    listContact,
  } = useContext(ContactContext);

  const { type, showAddType, setShowAddType, showEditType, listType } =
    useContext(TypeContext);

  useEffect(() => {
    listContact();
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
          <div>
            <h3>Meus Filtros:</h3>
            <button onClick={() => setShowAddType(true)}>
              <IoAddCircleOutline />
            </button>
            {!type?.length ? (
              <p> Ainda não possui nenhum filtro!</p>
            ) : (
              <ul>
                {type?.map((type) => (
                  <TypeCard type={type} key={type.id} />
                ))}
                {showEditType && <EditTypeModal />}
              </ul>
            )}
          </div>
        </section>
        <section>
          {!filterSearchContact?.length ? (
            <>
              <p> Ainda não possui nenhum contato cadastrado!</p>
              <img src={NoCard} alt="Sem contato" />
            </>
          ) : (
            <ul>
              {filterSearchContact?.map((contact) => (
                <ContactCard contact={contact} key={contact?.id} />
              ))}
              {showEditContact && <EditContactModal />}
            </ul>
          )}
        </section>
        {showAddContact && <AddContactModal />}
        {showAddType && <AddTypeModal />}
      </main>
    </>
  );
};
