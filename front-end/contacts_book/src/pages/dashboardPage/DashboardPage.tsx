import { useContext } from "react";
import { CgUserAdd, CgUserRemove, CgUserList } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { ContactCard } from "../../components/Card/ContactCard";
import { TypeCard } from "../../components/Card/TypeCard";
import { ContactContext } from "../../contexts/ContactContext";

export const DashboardPage = () => {
  const { contact } = useContext(ContactContext);

  return (
    <main>
      <section>
        <div>
          <button>
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
          <h3>Meus Contatos:</h3>
          {!contact?.length ? (
            <p> Nenhum filtro foi cadastrado ainda!</p>
          ) : (
            <ul>
              {contact.map((type) => (
                <TypeCard type={type} key={type.id} />
              ))}
            </ul>
          )}
        </div>
      </section>
      <section>
        {!contact?.length ? (
          <p> Nenhum contato foi cadastrado ainda!</p>
        ) : (
          <ul>
            {contact.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
