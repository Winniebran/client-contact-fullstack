import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import { AiOutlineLogout } from "react-icons/ai";
import { Nav } from "../Header/Nav/Nav";
import { StyledHeader } from "../../styles/header";
import { StyledButton } from "../../styles/button";

export const Header = () => {
  const { clientLogout, client } = useContext(ClientContext);

  return (
    <StyledHeader>
      <Nav />

      <div className="header">
        <div className="perfil">
          <img src={client?.image} alt="imagem de perfil" />
          <p>{client?.firstName}</p>
        </div>

        <button onClick={() => clientLogout()}>
          <AiOutlineLogout />
        </button>
      </div>
    </StyledHeader>
  );
};
