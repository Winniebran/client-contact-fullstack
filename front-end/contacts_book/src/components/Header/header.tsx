import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import { AiOutlineLogout } from "react-icons/ai";
import { Nav } from "../Header/Nav/Nav";

export const Header = () => {
  const { clientLogout, client } = useContext(ClientContext);

  return (
    <header>
      <Nav />

      <div>
        <div>
          <img src={client?.image} alt="imagem de perfil" />
          <p>{client?.firstName}</p>
        </div>

        <button onClick={() => clientLogout()}>
          <AiOutlineLogout />
        </button>
      </div>
    </header>
  );
};
