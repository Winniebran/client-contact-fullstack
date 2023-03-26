import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { TypeContext } from "../../../contexts/TypeContext";
import { IType } from "../../../interfaces/type.interface";
import { createTypeSerializer } from "../../../serializers/TypeSerializers";

import { AiOutlineCloseCircle, AiFillTag } from "react-icons/ai";

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
    <section>
      <div>
        <h2> Adicionar novo tipo de contato </h2>
        <button type="button" onClick={() => setShowAddType(false)}>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <form onSubmit={handleSubmit(createType)}>
        <div>
          <label htmlFor="name">Nome</label>
          <AiFillTag />
          <input
            id="name"
            type="text"
            placeholder="Digite o tipo de contato"
            {...register("name")}
          />
        </div>
        <span>{errors.name?.message}</span>
        <button>Adicionar</button>
      </form>
    </section>
  );
};
