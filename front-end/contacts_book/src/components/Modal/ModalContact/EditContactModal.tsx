import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContactContext } from "../../../contexts/ContactContext";
import { IContact } from "../../../interfaces/contact.interface";
import { updateContactSerializer } from "../../../serializers/ContactSerializers";
import { TypeContext } from "../../../contexts/TypeContext";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiPhone, FiImage, FiUser, FiMail, FiFilter } from "react-icons/fi";

export const EditContactModal = () => {
  const { updateContact, setShowEditContact, currentContact } =
    useContext(ContactContext);
  const { type } = useContext(TypeContext);

  const { register, handleSubmit } = useForm<IContact>({
    resolver: zodResolver(updateContactSerializer),
  });

  return (
    <section>
      <div>
        <h2> Editar Contato </h2>
        <button type="button" onClick={() => setShowEditContact(false)}>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <form
        onSubmit={handleSubmit((data) =>
          updateContact(data, currentContact?.id as string)
        )}
      >
        <div>
          <label htmlFor="firstName">Nome</label>
          <FiUser />
          <input
            id="firstName"
            type="text"
            defaultValue={currentContact?.firstName}
            {...register("firstName")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Sobrenome</label>
          <FiUser />
          <input
            id="lastName"
            type="text"
            defaultValue={currentContact?.lastName}
            {...register("lastName")}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <FiMail />
          <input
            id="email"
            type="email"
            defaultValue={currentContact?.email}
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="cellPhone">Celular</label>
          <FiPhone />
          <input
            id="cellPhone"
            type="tel"
            defaultValue={currentContact?.cellPhone}
            {...register("cellPhone")}
          />
        </div>

        <div>
          <label htmlFor="type">Tipo de contato</label>
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

        <div>
          <label htmlFor="image">Imagem</label>
          <FiImage />
          <input
            id="image"
            type="text"
            defaultValue={currentContact?.image}
            {...register("image")}
          />
        </div>

        <button>Editar</button>
      </form>
    </section>
  );
};
