import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContactContext } from "../../../contexts/ContactContext";
import { IContact } from "../../../interfaces/contact.interface";
import { updateContactSerializer } from "../../../serializers/ContactSerializers";
import { TypeContext } from "../../../contexts/TypeContext";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiPhone, FiImage, FiUser, FiMail, FiFilter } from "react-icons/fi";
import { StyledSectionModal } from "../../../styles/section";
import { StyledTitle } from "../../../styles/typography";
import { StyledFormModal } from "../../../styles/form";
import { StyledInput } from "../../../styles/input";

export const EditContactModal = () => {
  const { updateContact, setShowEditContact, currentContact } =
    useContext(ContactContext);
  const { type } = useContext(TypeContext);

  const { register, handleSubmit } = useForm<IContact>({
    resolver: zodResolver(updateContactSerializer),
  });

  return (
    <StyledSectionModal>
      <div className="modal">
        <div className="modal-header">
          <StyledTitle tag="h2" fontFamily="one" fontSize="seven">
            Editar Contato
          </StyledTitle>
          <button type="button" onClick={() => setShowEditContact(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <StyledFormModal
          onSubmit={handleSubmit((data) =>
            updateContact(data, currentContact?.id as string)
          )}
        >
          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="firstName"
              type="text"
              defaultValue={currentContact?.firstName}
              {...register("firstName")}
            />
          </div>

          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="lastName"
              type="text"
              defaultValue={currentContact?.lastName}
              {...register("lastName")}
            />
          </div>

          <div className="div-input-modal">
            <FiMail />
            <StyledInput
              id="email"
              type="email"
              defaultValue={currentContact?.email}
              {...register("email")}
            />
          </div>

          <div className="div-input-modal">
            <FiPhone />
            <StyledInput
              id="cellPhone"
              type="tel"
              defaultValue={currentContact?.cellPhone}
              {...register("cellPhone")}
            />
          </div>

          <div className="div-input-modal">
            <FiFilter />
            <select
              id="type"
              {...register("type")}
              defaultValue={currentContact?.type}
            >
              <optgroup label="Selecione o tipo">
                {type?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="div-input-modal">
            <FiImage />
            <StyledInput
              id="image"
              type="text"
              defaultValue={currentContact?.image}
              {...register("image")}
            />
          </div>

          <button className="button-modal">Editar</button>
        </StyledFormModal>
      </div>
    </StyledSectionModal>
  );
};
