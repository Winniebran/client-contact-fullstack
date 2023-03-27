import { useContext } from "react";
import { CgUserAdd, CgUserList } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";
import { ContactCard } from "../../components/Card/ContactCard";
import { TypeCard } from "../../components/Card/TypeCard";
import { ContactContext } from "../../contexts/ContactContext";
import { TypeContext } from "../../contexts/TypeContext";
import NoCard from "../../assets/NoCard.svg";
import { AddContactModal } from "../../components/Modal/ModalContact/AddContactModal";
import { AddTypeModal } from "../../components/Modal/ModalType/AddTypeModal";
import { EditContactModal } from "../../components/Modal/ModalContact/EditContactModal";
import { EditTypeModal } from "../../components/Modal/ModalType/EditTypeModal";
// import { DeleteTypeModal } from "../../components/Modal/ModalType/DeleteTypeModal";

export const DashboardPage = () => {
  const { contact, showAddContact, setShowAddContact, showEditContact } =
    useContext(ContactContext);
    
  const { type, showAddType, setShowAddType, showEditType, showDeleteType } =
    useContext(TypeContext);

  return (
    <main>
      <section>
        <div>
          <button onClick={() => setShowAddContact(true)}>
            <CgUserAdd /> Adicionar contato
          </button>
          <button>
            <CgUserList /> Listar contatos
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
              {/* {showDeleteType && <DeleteTypeModal />} */}
            </ul>
          )}
        </div>
      </section>
      <section>
        {!contact?.length ? (
          <>
            <p> Ainda não possui nenhum contato cadastrado!</p>
            <img src={NoCard} alt="" />
          </>
        ) : (
          <ul>
            {contact?.map((contact) => (
              <ContactCard contact={contact} key={contact?.id} />
            ))}
            {showEditContact && <EditContactModal />}
          </ul>
        )}
      </section>
      {showAddContact && <AddContactModal />}
      {showAddType && <AddTypeModal />}
    </main>
  );
};
