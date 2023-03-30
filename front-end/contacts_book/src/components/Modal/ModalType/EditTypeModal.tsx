import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TypeContext } from "../../../contexts/TypeContext";
import { IType } from "../../../interfaces/type.interface";
import { updateTypeSerializer } from "../../../serializers/TypeSerializers";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { StyledSectionModal } from "../../../styles/section";
import { StyledTitle } from "../../../styles/typography";
import { StyledFormModal } from "../../../styles/form";
import { StyledInput } from "../../../styles/input";

export const EditTypeModal = () => {
  const { updateType, setShowEditType, currentType } = useContext(TypeContext);

  const { register, handleSubmit } = useForm<IType>({
    resolver: zodResolver(updateTypeSerializer),
  });

  return (
    <StyledSectionModal>
      <div className="modal-type">
        <div className="modal-header-type">
          <StyledTitle tag="h2" fontFamily="one" fontSize="seven">
            Editar Tipo de Contato
          </StyledTitle>
          <button type="button" onClick={() => setShowEditType(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <StyledFormModal
          onSubmit={handleSubmit((data) =>
            updateType(data, currentType?.id as string)
          )}
        >
          <div className="div-input-modal">
            <FiUser />
            <StyledInput
              id="name"
              type="text"
              defaultValue={currentType?.name}
              {...register("name")}
            />
          </div>

          <button className="button-modal-type">Editar</button>
        </StyledFormModal>
      </div>
    </StyledSectionModal>
  );
};
