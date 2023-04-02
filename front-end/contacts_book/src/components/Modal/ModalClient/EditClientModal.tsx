import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ClientContext } from "../../../contexts/ClientContext";
import { IClient } from "../../../interfaces/client.interface";
import { updateClientSerializer } from "../../../serializers/ClientSerializer";

import { StyledSectionModal } from "../../../styles/section";
import { StyledTitle } from "../../../styles/typography";
import { StyledFormModal } from "../../../styles/form";
import { StyledInput } from "../../../styles/input";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiImage, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";

export const EditClientModal = () => {
  const { updateClient, setShowEditClient, client } = useContext(ClientContext);

  const { register, handleSubmit } = useForm<IClient>({
    resolver: zodResolver(updateClientSerializer),
  });

  return (
    <StyledSectionModal>
      <div className="modal">
        <div className="modal-header">
          <StyledTitle tag="h2" fontFamily="one" fontSize="seven">
            Editar Perfil
          </StyledTitle>
          <button type="button" onClick={() => setShowEditClient(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <StyledFormModal onSubmit={handleSubmit((data) => updateClient(data))}>
          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="firstName"
              type="text"
              defaultValue={client?.firstName}
              {...register("firstName")}
            />
          </div>

          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="lastName"
              type="text"
              defaultValue={client?.lastName}
              {...register("lastName")}
            />
          </div>

          <div className="div-input-modal">
            <FiMail />
            <StyledInput
              id="email"
              type="email"
              defaultValue={client?.email}
              {...register("email")}
            />
          </div>

          <div className="div-input-modal">
            <FiLock />
            <StyledInput
              id="password"
              type="password"
              defaultValue={client?.password}
              {...register("password")}
            />
          </div>

          <div className="div-input-modal">
            <FiPhone />
            <StyledInput
              id="cellPhone"
              type="tel"
              defaultValue={client?.cellPhone}
              {...register("cellPhone")}
            />
          </div>

          <div className="div-input-modal">
            <FiImage />
            <StyledInput
              id="image"
              type="text"
              defaultValue={client?.image}
              {...register("image")}
            />
          </div>

          <button className="button-modal">Editar</button>
        </StyledFormModal>
      </div>
    </StyledSectionModal>
  );
};
