import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { TypeContext } from "../../../contexts/TypeContext";
import { IType } from "../../../interfaces/type.interface";
import { createTypeSerializer } from "../../../serializers/TypeSerializers";

import { AiOutlineCloseCircle, AiFillTag } from "react-icons/ai";
import { StyledSectionModal } from "../../../styles/section";
import { StyledTitle } from "../../../styles/typography";
import { StyledFormModal } from "../../../styles/form";
import { StyledInput } from "../../../styles/input";

export const AddTypeModal = () => {
  const { createType, setShowAddType } = useContext(TypeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IType>({
    resolver: zodResolver(createTypeSerializer),
  });

  return (
    <StyledSectionModal>
      <div className="modal-type">
        <div className="modal-header-type">
          <StyledTitle tag="h2" fontFamily="one" fontSize="seven">
            Adicionar tipo de contato
          </StyledTitle>
          <button type="button" onClick={() => setShowAddType(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <StyledFormModal onSubmit={handleSubmit(createType)}>
          <div className="div-input-modal">
            <AiFillTag />
            <StyledInput
              id="name"
              type="text"
              placeholder="Digite o tipo de contato"
              {...register("name")}
            />
          </div>
          <span>{errors.name?.message}</span>
          <button className="button-modal-type">Adicionar</button>
        </StyledFormModal>
      </div>
    </StyledSectionModal>
  );
};
