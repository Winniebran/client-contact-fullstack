import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContactContext } from "../../../contexts/ContactContext";
import { IContact } from "../../../interfaces/contact.interface";
import { createContactSerializer } from "../../../serializers/ContactSerializers";
import { TypeContext } from "../../../contexts/TypeContext";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiPhone, FiImage, FiUser, FiMail, FiFilter } from "react-icons/fi";
import { StyledSectionModal } from "../../../styles/section";
import { StyledFormModal } from "../../../styles/form";
import { StyledTitle } from "../../../styles/typography";
import { StyledInput } from "../../../styles/input";

export const AddContactModal = () => {
  const { createContact, setShowAddContact } = useContext(ContactContext);
  const { type } = useContext(TypeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: zodResolver(createContactSerializer),
  });

  return (
    <StyledSectionModal>
      <div className="modal">
        <div className="modal-header">
          <StyledTitle tag="h2" fontFamily="one" fontSize="seven">
            Adicionar novo contato
          </StyledTitle>
          <button type="button" onClick={() => setShowAddContact(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <StyledFormModal onSubmit={handleSubmit(createContact)}>
          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="firstName"
              type="text"
              placeholder="Nome"
              {...register("firstName")}
            />
          </div>
          <span>{errors.firstName?.message}</span>

          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="lastName"
              type="text"
              placeholder="Sobrenome"
              {...register("lastName")}
            />
          </div>
          <span>{errors.lastName?.message}</span>

          <div className="div-input-modal">
            <FiMail />
            <StyledInput
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </div>
          <span>{errors.email?.message}</span>

          <div className="div-input-modal">
            <FiPhone />
            <StyledInput
              id="cellPhone"
              type="tel"
              placeholder="Celular"
              {...register("cellPhone")}
            />
          </div>
          <span>{errors.cellPhone?.message}</span>

          <div className="div-input-modal">
            <FiFilter />
            <select id="type" {...register("type")}>
              <optgroup label="Selecione o tipo">
                {type?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          <span>{errors.type?.message}</span>

          <div className="div-input-modal">
            <FiImage />
            <StyledInput
              id="image"
              type="text"
              placeholder="Imagem do Perfil"
              {...register("image")}
            />
          </div>
          <span>{errors.image?.message}</span>

          <button className="button-modal">Adicionar</button>
        </StyledFormModal>
      </div>
    </StyledSectionModal>
  );
};
