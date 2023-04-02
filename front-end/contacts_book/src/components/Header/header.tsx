import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";
import { Nav } from "../Header/Nav/Nav";
import NoImg from "../../@types/assets/NoImg.jpg";

import { StyledHeader } from "../../styles/header";
import { AiOutlineLogout, AiOutlineEdit } from "react-icons/ai";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { EditClientModal } from "../Modal/ModalClient/EditClientModal";

export const Header = () => {
  const {
    clientLogout,
    client,
    deleteClient,
    setShowEditClient,
    showEditClient,
  } = useContext(ClientContext);

  const editClient = () => {
    setShowEditClient(true);
  };

  return (
    <StyledHeader>
      <Nav />

      <div className="header">
        <div className="perfil">
          {client?.image == "" ? (
            <img src={NoImg} alt="imagem de perfil" />
          ) : (
            <img src={client?.image} alt="imagem de perfil" />
          )}
          <p>{client?.firstName}</p>
          <div className="button-perfil">
            <button onClick={() => editClient()}>
              <AiOutlineEdit />
            </button>
            <button onClick={() => deleteClient()}>
              <IoRemoveCircleOutline />
            </button>
          </div>
        </div>

        <button onClick={() => clientLogout()}>
          <AiOutlineLogout />
        </button>
      </div>
      {showEditClient && <EditClientModal />}
    </StyledHeader>
  );
};
