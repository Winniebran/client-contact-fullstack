import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TypeContext } from "../../../contexts/TypeContext";
import { IType } from "../../../interfaces/type.interface";
import { updateTypeSerializer } from "../../../serializers/TypeSerializers";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

export const EditTypeModal = () => {
  const { updateType, setShowEditType, currentType } = useContext(TypeContext);

  const { register, handleSubmit } = useForm<IType>({
    resolver: zodResolver(updateTypeSerializer),
  });

  return (
    <section>
      <div>
        <h2> Editar Tipo de Contato </h2>
        <button type="button" onClick={() => setShowEditType(false)}>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <form
        onSubmit={handleSubmit((data) =>
          updateType(data, currentType?.id as string)
        )}
      >
        <div>
          <label htmlFor="name">Nome</label>
          <FiUser />
          <input
            id="name"
            type="text"
            defaultValue={currentType?.name}
            {...register("name")}
          />
        </div>

        <button>Editar</button>
      </form>
    </section>
  );
};
