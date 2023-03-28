import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import { ContactContext } from "../../contexts/ContactContext";

export const Header = () => {
  const { clientLogout, client } = useContext(ClientContext);
  const { input, setInput } = useContext(ContactContext);

  return (
    <header>
      <nav>
        <h1>CONTACTLAND</h1>
        <div>
          <form>
            <label htmlFor="search">
              <AiOutlineSearch />
            </label>
            <input
              id="search"
              type="search"
              value={input}
              placeholder="Pesquise um contato"
              title="Digite nome, email ou telefone"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>

          <button onClick={() => clientLogout()}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>

      <div>
        <img src={client?.image} alt="imagem de perfil" />}</p>
      </div>
    </header>
  );
};
